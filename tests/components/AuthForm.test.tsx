import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { describe, it, expect, vi, afterEach } from "vitest"
import AuthForm from "@/components/AuthForm"

describe("AuthForm", () => {
  afterEach(() => {
    vi.restoreAllMocks()
  })

  describe("login mode", () => {
    it("renders email input, password input with toggle, and Login button", () => {
      render(<AuthForm mode="login" />)

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: /show password/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: /login/i })
      ).toBeInTheDocument()
    })

    it("shows the correct heading and navigation link", () => {
      render(<AuthForm mode="login" />)

      expect(
        screen.getByRole("heading", { name: /log in to your account/i })
      ).toBeInTheDocument()
      const signUpLink = screen.getByRole("link", { name: /sign up/i })
      expect(signUpLink).toBeInTheDocument()
      expect(signUpLink).toHaveAttribute("href", "/signup")
    })
  })

  describe("signup mode", () => {
    it("renders email input, password input with toggle, and Sign Up button", () => {
      render(<AuthForm mode="signup" />)

      expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
      expect(screen.getByPlaceholderText("Enter your password")).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: /show password/i })
      ).toBeInTheDocument()
      expect(
        screen.getByRole("button", { name: /sign up/i })
      ).toBeInTheDocument()
    })

    it("shows the correct heading and navigation link", () => {
      render(<AuthForm mode="signup" />)

      expect(
        screen.getByRole("heading", { name: /signup for an account/i })
      ).toBeInTheDocument()
      const loginLink = screen.getByRole("link", { name: /log in/i })
      expect(loginLink).toBeInTheDocument()
      expect(loginLink).toHaveAttribute("href", "/login")
    })
  })

  describe("password toggle", () => {
    it("reveals and hides the password text when clicked", async () => {
      const user = userEvent.setup()
      render(<AuthForm mode="login" />)

      const passwordInput = screen.getByPlaceholderText("Enter your password")
      const toggle = screen.getByRole("button", { name: /show password/i })

      expect(passwordInput).toHaveAttribute("type", "password")

      await user.click(toggle)
      expect(passwordInput).toHaveAttribute("type", "text")
      expect(toggle).toHaveAttribute("aria-label", "Hide password")

      await user.click(toggle)
      expect(passwordInput).toHaveAttribute("type", "password")
      expect(toggle).toHaveAttribute("aria-label", "Show password")
    })
  })

  describe("form submission", () => {
    it("logs form data to the console on submit", async () => {
      const user = userEvent.setup()
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})

      render(<AuthForm mode="signup" />)

      await user.type(screen.getByLabelText(/email/i), "alice@example.com")
      await user.type(screen.getByPlaceholderText("Enter your password"), "p4ssword!")
      await user.click(screen.getByRole("button", { name: /sign up/i }))

      expect(consoleSpy).toHaveBeenCalledWith({
        form: "signup",
        email: "alice@example.com",
        password: "p4ssword!",
      })
    })

    it("logs empty values when form is submitted without input", async () => {
      const user = userEvent.setup()
      const consoleSpy = vi.spyOn(console, "log").mockImplementation(() => {})

      render(<AuthForm mode="login" />)

      await user.click(screen.getByRole("button", { name: /login/i }))

      expect(consoleSpy).toHaveBeenCalledWith({
        form: "login",
        email: "",
        password: "",
      })
    })
  })
})
