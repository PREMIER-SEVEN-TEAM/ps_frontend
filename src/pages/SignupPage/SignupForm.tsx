import React, { useState } from "react";
import { FaUserAlt, FaLock, FaEnvelope } from "react-icons/fa";
import { Button } from "../../shared/ui/Button";
import { InputBox } from "../../shared/ui/InputBox";
import { toast } from "react-toastify";

const SignupForm: React.FC = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [agreed, setAgreed] = useState(false);

  const isValidEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const [errors, setErrors] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newErrors = {
      username: !username,
      email: !email,
      password: !password,
      confirmPassword: !confirmPassword,
    };

    setErrors(newErrors);

    if (Object.values(newErrors).some(Boolean)) {
      toast.error("모든 항목을 입력해주세요.");
      return;
    }

    if (!isValidEmail(email)) {
      setErrors((prev) => ({ ...prev, email: true }));
      toast.error("올바른 이메일 형식을 입력해주세요.");
      return;
    }

    if (password !== confirmPassword) {
      setErrors((prev) => ({
        ...prev,
        password: true,
        confirmPassword: true,
      }));
      toast.error("패스워드가 일치하지 않습니다.");
      return;
    }

    if (!agreed) {
      toast.error("약관 동의는 필수입니다.");
      return;
    }
    // API 연결 전에는 그냥 콘솔 출력
    console.log({ username, email, password, agreed });
  };

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="w-full max-w-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-1 text-center">
        Join the prediction journey!
      </h2>
      <p className="text-md text-gray-400 mb-6 text-center">
        Sign up and start making your mark
      </p>

      {/* Username */}
      <div className="mb-4">
        <InputBox
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          icon={<FaUserAlt />}
          hasError={errors.username}
        />
      </div>

      {/* Email */}
      <div className="mb-4">
        <InputBox
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          icon={<FaEnvelope />}
          hasError={errors.email}
        />
      </div>

      {/* Password */}
      <div className="mb-4">
        <InputBox
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          icon={<FaLock />}
          hasError={errors.password}
        />
      </div>

      {/* Confirm Password */}
      <div className="mb-4">
        <InputBox
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          icon={<FaLock />}
          hasError={errors.confirmPassword}
        />
      </div>

      {/* Agree to terms */}
      <div className="flex justify-between text-sm text-gray-400 mb-6">
        <label className="flex items-center gap-2">
          <input
            type="checkbox"
            checked={agreed}
            onChange={() => setAgreed(!agreed)}
            className="accent-[#AB54DB]"
          />
          I agree to the terms and conditions
        </label>
      </div>

      {/* Signup Button */}
      <Button type="submit" className="w-full mb-6" color="purple" size="md">
        Sign Up
      </Button>

      {/* Switch to login */}
      <p className="text-center text-gray-500 text-sm">
        Already have an account?{" "}
        <a href="/signin" className="text-[#AB54DB] hover:underline">
          Login
        </a>
      </p>
    </form>
  );
};

export default SignupForm;
