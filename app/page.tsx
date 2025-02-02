import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="flex justify-between items-center px-8 py-4 bg-white shadow-md relative">
        <div className="flex items-center">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </div>
        <nav className="space-x-6 flex items-center">
          <a href="#" className="text-gray-600 hover:text-black">Home</a>
          <a href="#" className="text-gray-600 hover:text-black">About</a>
          <a href="https://mental-wellness-hub.vercel.app/dashboard" className="text-gray-600 hover:text-black">Dashboard</a>
          
          {/* Dropdown */}
          <div className="relative group">
            <button className="text-gray-600 hover:text-black">
              Services
            </button>
            <div className="absolute left-0 mt-2 w-48 bg-white shadow-lg border border-gray-200 rounded-md opacity-0 group-hover:opacity-100 group-hover:block transition-opacity duration-300">
              <a href="https://mental-wellness-hub.vercel.app/cbt" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">CBT</a>
              <hr className="border-gray-300" />
              <a href="https://mental-wellness-hub.vercel.app/meditation" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">Meditation</a>
              <hr className="border-gray-300" />
              <a href="https://mental-wellness-hub.vercel.app/resources" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">Resources</a>
              <hr className="border-gray-300" />
              <a href="https://mental-wellness-hub.vercel.app/journal" className="block px-4 py-2 text-gray-600 hover:text-black hover:bg-gray-100">Journal</a>
            </div>
          </div>
        </nav>
        <div className="flex items-center space-x-4">
          <a href="https://hip-bass-26.accounts.dev/sign-in?redirect_url=https%3A%2F%2Fmental-wellness-hub.vercel.app%2F" className="text-gray-600 hover:text-black">Sign in</a>
        </div>
      </header>
      
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center min-h-screen">
        <h1 className="text-6xl font-extrabold text-black">Free Mental Health Support</h1>
        <p className="text-gray-600 mt-4 max-w-2xl font-bold">
        Explore our comprehensive library of resources designed to improve your mental well-being without the cost barrier.
        </p>
      </section>

      {/* Mission Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-12 py-16 bg-white">
        <div className="w-full md:w-1/2 bg-purple-800 text-white p-8 rounded-lg shadow-lg relative">
          <div className="absolute inset-0 bg-black opacity-40 rounded-lg"></div>
          <p className="relative z-10 text-lg font-semibold">
            “Studies have found CBT to be very effective for treating less severe forms of depression, anxiety, post-traumatic stress disorder (PTSD), and other conditions.”
          </p>
          <p className="relative z-10 mt-4 font-bold">Gerald Gartlehner (June 2017)</p>
          <p className="relative z-10 text-sm">Physician, health scientist, and clinical epidemiologist.</p>
        </div>
        <div className="w-full md:w-1/2 mt-8 md:mt-0 md:pl-12">
          <h2 className="text-xl font-bold text-purple-700">Our Mission</h2>
          <h3 className="text-4xl font-extrabold text-gray-900 mt-2">Make mental health accessible.</h3>
          <p className="text-gray-600 mt-4">
            Therapy has been proven to be an effective way to improve mental health and well-being. However, the cost of therapy can be a barrier for many people. Our mission is to provide free mental health resources to everyone, regardless of their financial situation.
          </p>
          <p className="text-gray-600 mt-4">
            We provide educational content on mental health and therapy strategies, aiming to educate and empower individuals to take control of their mental health. Additionally, we offer services such as cognitive behavioral therapy, meditation timers, and journaling prompts.
          </p>
          <a href="https://mental-wellness-hub.vercel.app/dashboard#" className="text-purple-600 font-bold mt-4 block">Get Started →</a>
        </div>
      </section>

      {/* Resources Section */}
      <section className="py-16 bg-white text-center">
        <h2 className="text-4xl font-extrabold text-black">Resources to help you thrive.</h2>
        <p className="text-gray-500 mt-4 max-w-3xl mx-auto">
          On our services page, you can find a variety of resources used to assist in mental wellness.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="bg-[#6B46C1] p-3 rounded-xl">
              <span className="text-white text-lg">💬</span>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-black">CBT Sessions</h3>
              <p className="text-gray-500">
                With our bot, KelvinAI, we offer a guider to walk you through Cognitive Behavioral Therapy sessions.
              </p>
            </div>
          </div>
          
          <div className="flex items-start space-x-4">
            <div className="bg-[#6B46C1] p-3 rounded-xl">
              <span className="text-white text-lg">📖</span>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-black">Journaling</h3>
              <p className="text-gray-500">
                We provide a journaling feature to help you track your thoughts and feelings, and identify patterns in your behavior.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#6B46C1] p-3 rounded-xl">
              <span className="text-white text-lg">⏳</span>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-black">Meditation Timer</h3>
              <p className="text-gray-500">
                Our meditation timer and guides help you to practice mindfulness and reduce stress and anxiety.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-[#6B46C1] p-3 rounded-xl">
              <span className="text-white text-lg">🔍</span>
            </div>
            <div className="text-left">
              <h3 className="text-lg font-bold text-black">Personalized Dashboard</h3>
              <p className="text-gray-500">
                We offer a personalized dashboard to help you track your progress and set goals for your mental health journey.
              </p>
            </div>
          </div>
        </div>

        <footer className="bg-[#f9f9f9] py-10 mt-16">
        <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="text-gray-400">
        <span>©</span> 2024 All Rights Reserved
        </p>
        </div>
</footer>

      </section>

    </div>

    
  );
}
