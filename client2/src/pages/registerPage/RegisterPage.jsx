import React from 'react';
import RegisterForm from '../../components/RegisterForm/RegisterForm';

function RegisterPage() {
  return (
    <section className="bg-white">
      <div className="container mx-auto py-8 lg:grid lg:grid-cols-12 lg:gap-8">
        <aside className="lg:order-last lg:col-span-5 lg:h-full flex flex-col justify-center bg-blue-100 rounded-lg p-6">
          <div className="max-w-md">
            <h2 className="text-3xl font-bold mb-4 text-blue-900">Welcome to TaskSync 📋</h2>
            <p className="text-blue-800 mb-4">
              TaskSync is your go-to productivity tool, designed with simplicity and efficiency in mind. As a Trello clone, TaskSync offers all the features you love, including:
            </p>
            <ul className="list-disc pl-6 text-blue-800">
              <li className="mb-2">Easy-to-use task management interface</li>
              <li className="mb-2">Customizable boards and lists</li>
              <li className="mb-2">Drag-and-drop functionality for effortless task organization</li>
              <li className="mb-2">Cross-platform synchronization for access anywhere, anytime</li>
            </ul>
            <p className="text-lg mt-6 text-blue-800">
              Register now to start organizing your tasks and boosting your productivity with TaskSync!
            </p>
          </div>
        </aside>
        <RegisterForm />
      </div>
    </section>
  );
}

export default RegisterPage;
