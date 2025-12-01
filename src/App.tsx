import { useState } from "react";
import "./App.css";
import logo from "./assets/logo.png";
import Field from "./Components/Field";
function App() {
  const [name, setName] = useState("");
  const [nameMessage, setNameMessage] = useState("");
  const [email, setEmail] = useState("");
  const [emailMessage, setEmailMessage] = useState("");
  const [password, setPassword] = useState("");
  const [passwordMessage, setPasswordMessage] = useState("");
  const [confirmation, setConfirmation] = useState("");
  const [confirmationMessage, setConfirmationMessage] = useState("");
  const [errors, setErrors] = useState<string[]>([]);
  const [success, setSuccess] = useState("");
  const validateEmail = (email: string) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };
  const submit = () => {
    setErrors([]);
    setSuccess("");
    if (
      name.trim() !== "" &&
      email.trim() !== "" &&
      password.trim() !== "" &&
      confirmation.trim() !== ""
    ) {
      if (password && confirmation) {
        if (password !== confirmation) {
          setErrors((prev) => [...prev, "Passwords do not match"]);
          return;
        }
      }
      setSuccess("Form submitted successfully!");
    } else {
      setErrors((prev) => [...prev, "Please fill in all required fields"]);
    }
  };

  return (
    <div className="app min-h-screen w-full flex justify-center items-center relative">
      <div className="form min-w-[40%] min-h-[500px] px-8 py-8 flex flex-col justify-center items-center gap-4  bg-sky-500/10 backdrop-blur-sm rounded-md border border-solid border-sky-300/30">
        <img src={logo} alt="logo" className="logo w-20 h-20 rounded-full" />
        <Field
          label="Name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            if (e.target.value.trim() === "") {
              setNameMessage("Name cannot be empty");
            } else {
              setNameMessage("");
            }
          }}
          errorMessage={nameMessage}
        />
        <Field
          label="Email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (e.target.value.trim() === "") {
              setEmailMessage("Email cannot be empty");
            } else if (!validateEmail(e.target.value)) {
              setEmailMessage("Invalid email format");
            } else {
              setEmailMessage("");
            }
          }}
          errorMessage={emailMessage}
        />
        <Field
          label="Password"
          type="password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (e.target.value.trim() === "") {
              setPasswordMessage("Password cannot be empty");
            } else {
              setPasswordMessage("");
            }
          }}
          errorMessage={passwordMessage}
        />

        <Field
          label="Confirmation"
          type="password"
          value={confirmation}
          onChange={(e) => {
            setConfirmation(e.target.value);
            if (e.target.value.trim() === "") {
              setConfirmationMessage("Confirmation cannot be empty");
            } else {
              setConfirmationMessage("");
            }
          }}
          errorMessage={confirmationMessage}
        />
        <div className="field flex justify-center items-start flex-col gap-2 w-full mt-2">
          <button
            className="bg-[#ff6f00] rounded-md px-4 py-2 mx-auto text-white hover:bg-[#ff6f00] cursor-pointer"
            onClick={submit}
          >
            Submit
          </button>
        </div>
      </div>
      {errors.length > 0 && (
        <div className="errors mt-4 absolute top-[170px] right-0 w-[350px] bg-red-500/50 backdrop-blur-sm border-2 border-solid border-red-600 px-8 py-4 rounded-l-lg">
          {errors.map((err, index) => (
            <p key={index} className="text-white text-left text-lg">
              {err}
            </p>
          ))}
        </div>
      )}
      {success && (
        <div className="errors mt-4 absolute top-[100px] right-0 w-[350px] bg-green-400/50 backdrop-blur-sm border-2 border-solid border-green-600 px-8 py-4 rounded-l-lg">
          <p className="text-white text-left">{success}</p>
        </div>
      )}
    </div>
  );
}

export default App;
