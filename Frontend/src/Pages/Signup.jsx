export default function SignUp() {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100 text-gray-900">
        <div className="w-full max-w-sm p-6 shadow-xl rounded-2xl bg-white border border-gray-300">
          <h2 className="text-2xl text-center text-gray-900 font-semibold mb-4">Sign Up</h2>
          <form className="space-y-4">
            <input type="text" name="username" placeholder="Username" required className="w-full p-2 bg-gray-200 text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="email" name="email" placeholder="Email" required className="w-full p-2 bg-gray-200 text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="password" name="password" placeholder="Password" required className="w-full p-2 bg-gray-200 text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <input type="text" name="contact" placeholder="Contact No" required className="w-full p-2 bg-gray-200 text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" />
            <select name="role" required className="w-full p-2 bg-gray-200 text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="" disabled selected>Select Role</option>
              <option value="student">Student</option>
              <option value="teacher">Teacher</option>
              <option value="admin">Admin</option>
            </select>
            <button type="submit" className="w-full p-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold shadow-md transition duration-300 transform hover:scale-105">Sign Up</button>
          </form>
        </div>
      </div>
    );
  }
  
  
  

