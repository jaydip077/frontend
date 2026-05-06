import React, { useState } from 'react'
import './Login.scss'

export default function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  })
  const [errors, setErrors] = useState({})
  const [touched, setTouched] = useState({})
  const [rememberMe, setRememberMe] = useState(false)

  const validateField = (name, value) => {
    let error = ''
    
    switch (name) {
      case 'email':
        if (!value) {
          error = 'Email is required'
        } else if (!/\S+@\S+\.\S+/.test(value)) {
          error = 'Please enter a valid email address'
        }
        break
      case 'password':
        if (!value) {
          error = 'Password is required'
        } else if (value.length < 6) {
          error = 'Password must be at least 6 characters'
        } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(value)) {
          error = 'Password must contain uppercase, lowercase, and number'
        }
        break
      default:
        break
    }
    
    return error
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    if (touched[name]) {
      const error = validateField(name, value)
      setErrors(prev => ({ ...prev, [name]: error }))
    }
  }

  const handleBlur = (e) => {
    const { name, value } = e.target
    setTouched(prev => ({ ...prev, [name]: true }))
    const error = validateField(name, value)
    setErrors(prev => ({ ...prev, [name]: error }))
  }

  const validateForm = () => {
    const newErrors = {}
    newErrors.email = validateField('email', formData.email)
    newErrors.password = validateField('password', formData.password)
    setErrors(newErrors)
    setTouched({ email: true, password: true })
    return !newErrors.email && !newErrors.password
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (validateForm()) {
      console.log('Login submitted:', { ...formData, rememberMe })
      alert('Login successful!')
    }
  }

  const isFormValid = () => {
    return formData.email && formData.password && 
           !errors.email && !errors.password
  }

  return (
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome Back</h2>
        
        <form onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email" 
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.email && errors.email ? 'error' : ''}
            />
            {touched.email && errors.email && (
              <span className="field-error">{errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              onBlur={handleBlur}
              className={touched.password && errors.password ? 'error' : ''}
            />
            {touched.password && errors.password && (
              <span className="field-error">{errors.password}</span>
            )}
          </div>

          <div className="checkbox-group">
            <input
              type="checkbox"
              id="remember"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <label htmlFor="remember">Remember me</label>
          </div>

          <button type="submit" disabled={!isFormValid()}>
            Sign In
          </button>
        </form>

        <div className="login-links">
          <a href="#forgot">Forgot Password?</a>
          <span> | </span>
          <a href="#signup">Sign Up</a>
        </div>
      </div>
    </div>
  )
}
