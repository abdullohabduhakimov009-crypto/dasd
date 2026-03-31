// English-only strings to replace translations.ts
export const englishStrings = {
  nav: {
    home: "Home",
    signUp: "Sign Up",
    platform: "Platform",
    solutions: "Solutions",
    pricing: "Pricing",
    resources: "Resources",
    login: "Log in",
    contact: "Contact",
    getStarted: "Get Started"
  },
  settings: {
    profile: "Profile",
    security: "Security",
    notifications: "Notifications",
    profileInfo: "Profile Information",
    profileDesc: "Update your personal information and preferences",
    fullName: "Full Name",
    email: "Email Address",
    phone: "Phone Number",
    saveChanges: "Save Changes",
    securitySettings: "Security Settings",
    securityDesc: "Manage your security preferences and password",
    passwordReq: "Password Requirements",
    passwordReqDesc: "Keep your account secure with a strong password",
    newPassword: "New Password",
    confirmPassword: "Confirm Password",
    updatePassword: "Update Password",
    notifPrefs: "Notification Preferences",
    notifDesc: "Choose how you want to receive updates",
    emailNotif: "Email Notifications",
    emailNotifDesc: "Receive important updates via email",
    pushNotif: "Push Notifications",
    pushNotifDesc: "Get real-time alerts on your devices",
    smsNotif: "SMS Notifications",
    smsNotifDesc: "Receive critical alerts via text message",
    marketingNotif: "Marketing Emails",
    marketingNotifDesc: "Subscribe to our newsletter and promotions",
    saveNotif: "Save Preferences",
    dangerZone: "Danger Zone",
    deleteDesc: "Permanently delete your account and all data",
    deleteAccount: "Delete Account",
    deleteConfirmTitle: "Delete Account?",
    deleteConfirmDesc: "This action cannot be undone. All your data will be permanently deleted.",
    deleteConfirmButton: "Delete My Account",
    cancel: "Cancel",
    successProfile: "Profile updated successfully",
    errorProfile: "Failed to update profile",
    successNotif: "Notifications preferences saved",
    errorNotif: "Failed to save notification preferences",
    successPassword: "Password updated successfully",
    errorPassword: "Failed to update password",
    errorDelete: "Failed to delete account",
  },
  about: {
    tag: "About Us",
    heroTitle: "Connecting exceptional tech talent with innovative companies",
    heroDesc: "Desknet is the infrastructure layer for global technical talent. We bridge the gap between the best engineers and forward-thinking companies.",
    missionTag: "Our Mission",
    missionTitle: "Transform how companies find talent and how engineers find opportunities",
    missionDesc: "Desknet is the infrastructure layer for global technical talent. We bridge the gap between the best engineers and forward-thinking companies.",
    rigorousVetting: "Rigorous Vetting",
    valuesTag: "Core Values",
    valuesTitle: "What drives us forward",
    valuesSubtitle: "Our core principles guide every decision and every feature.",
    values: {
      transparency: {
        title: "Transparency",
        desc: "Honest communication and clear terms for all parties. No hidden fees, no surprises—just straightforward collaboration."
      },
      quality: {
        title: "Quality First",
        desc: "We work only with verified engineers and serious companies committed to excellence."
      },
      compensation: {
        title: "Fair Compensation",
        desc: "Engineers deserve competitive rates. We ensure every opportunity values technical expertise."
      },
      speed: {
        title: "Speed & Efficiency",
        desc: "Time matters in tech. Our process connects talent with opportunities in days, not months."
      },
      community: {
        title: "Community Driven",
        desc: "We're not just building a platform—we're creating a community of technologists and innovators."
      },
      innovation: {
        title: "Continuous Innovation",
        desc: "Technology evolves, and we evolve with it. We continuously improve the platform."
      }
    }
  },
  signup: {
    title: "Join Desknet",
    subtitle: "Choose your account type to get started",
    engineer: "Engineer",
    engineerDesc: "Join our network of elite engineers",
    client: "Client",
    clientDesc: "Hire verified engineering talent",
    fullName: "Full Name",
    email: "Email Address",
    password: "Password",
    companyName: "Company Name",
    firstName: "First Name",
    lastName: "Last Name",
    companyEmail: "Company Email",
    companySize: "Number of People in Company",
    createAccount: "Create Account",
    hasAccount: "Already have an account?",
    signIn: "Sign In",
    back: "Back to selection",
    continue: "Continue",
    complete: "Complete Registration",
    steps: {
      account: "Account",
      personal: "Personal",
      professional: "Professional",
      rates: "Rates",
      assets: "Assets"
    },
    fields: {
      dob: "Date of Birth",
      country: "Country",
      city: "City",
      specialization: "Main IT Specialization",
      experience: "Years of Experience",
      skills: "Skills (comma separated)",
      hourlyRate: "Hourly Rate ($)",
      languages: "Languages",
      phoneNumber: "Phone Number",
    },
    onboarding: {
      placeholders: {
        selectLanguage: "Select Language",
      }
    }
  },
  login: {
    title: "Welcome Back",
    subtitle: "Choose your account type to continue",
    engineer: "Engineer",
    client: "Client",
    admin: "Administrator",
    signIn: "Sign In",
  },
  why: {
    tag: "Why Desknet",
  }
};

export const useEnglish = () => {
  return englishStrings;
};
