"use client"

import { useState } from "react"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import styles from "./AuthForm.module.css"

interface AuthFormProps {
  mode: "login" | "signup"
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    console.log({ form: mode, email, password })
  }

  const isLogin = mode === "login"
  const heading = isLogin ? "Log in to Your Account" : "Signup for an Account"
  const submitLabel = isLogin ? "Login" : "Sign Up"

  return (
    <form className={styles.form} onSubmit={handleSubmit} noValidate>
      <h2 className="form-title">{heading}</h2>

      <div className={styles.field}>
        <label htmlFor="email" className={styles.label}>
          Email
        </label>
        <input
          id="email"
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={styles.input}
        />
      </div>

      <div className={styles.field}>
        <label htmlFor="password" className={styles.label}>
          Password
        </label>
        <div className={styles.inputWrapper}>
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className={styles.input}
          />
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowPassword((prev) => !prev)}
            aria-label={showPassword ? "Hide password" : "Show password"}
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>
      </div>

      <button type="submit" className={`btn ${styles.submit}`}>
        {submitLabel}
      </button>

      <p className={styles.navLink}>
        {isLogin ? (
          <>
            Don&apos;t have an account?{" "}
            <Link href="/signup">Sign up</Link>
          </>
        ) : (
          <>
            Already have an account?{" "}
            <Link href="/login">Log in</Link>
          </>
        )}
      </p>
    </form>
  )
}
