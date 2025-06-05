
export interface ContactForm {
  name: string;
  email: string;
  company: string;
  message: string;
}

export interface ApiResponse<T> {
  success: boolean;
  data?: T;
  message: string;
}

// Mock API for contact form submission
export const submitContactForm = async (formData: ContactForm): Promise<ApiResponse<null>> => {
  // Simulate network delay
  await new Promise(resolve => setTimeout(resolve, 1500));
  
  // Simulate random success/failure for demo purposes
  const isSuccess = Math.random() > 0.1; // 90% success rate
  
  if (isSuccess) {
    // Store in localStorage (mock database)
    const submissions = JSON.parse(localStorage.getItem('contact_submissions') || '[]');
    submissions.push({
      ...formData,
      timestamp: new Date().toISOString(),
      id: Date.now().toString()
    });
    localStorage.setItem('contact_submissions', JSON.stringify(submissions));
    
    return {
      success: true,
      message: "Thank you for your message! We'll get back to you soon."
    };
  } else {
    return {
      success: false,
      message: "Something went wrong. Please try again later."
    };
  }
};

// Mock API for newsletter subscription
export const subscribeToNewsletter = async (email: string): Promise<ApiResponse<null>> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  const subscribers = JSON.parse(localStorage.getItem('newsletter_subscribers') || '[]');
  
  if (subscribers.includes(email)) {
    return {
      success: false,
      message: "This email is already subscribed to our newsletter."
    };
  }
  
  subscribers.push(email);
  localStorage.setItem('newsletter_subscribers', JSON.stringify(subscribers));
  
  return {
    success: true,
    message: "Successfully subscribed to our newsletter!"
  };
};

// Mock user authentication
export const authenticateUser = async (email: string, password: string): Promise<ApiResponse<{ user: any; token: string }>> => {
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // Mock user database
  const users = [
    { id: 1, email: 'demo@example.com', password: 'password', name: 'Demo User' },
    { id: 2, email: 'admin@saasify.com', password: 'admin123', name: 'Admin User' }
  ];
  
  const user = users.find(u => u.email === email && u.password === password);
  
  if (user) {
    const { password: _, ...userWithoutPassword } = user;
    return {
      success: true,
      data: {
        user: userWithoutPassword,
        token: 'mock-jwt-token-' + Date.now()
      },
      message: "Login successful"
    };
  } else {
    return {
      success: false,
      message: "Invalid email or password"
    };
  }
};
