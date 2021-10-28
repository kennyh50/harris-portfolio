import React from 'react'

const Support = () => {
  return (
    <section className="container p-6 mx-auto bg-white dark:bg-gray-800">
      <h2 className="flex justify-center text-xl font-medium text-gray-800 capitalize dark:text-white md:text-2xl">The HOMIES</h2>

      <div className="flex items-center justify-center">
        <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Ahmed Omer</h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">CEO</span>
            </div>
          </div>

          <div className="w-full max-w-xs text-center">
            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1516756587022-7891ad56a8cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="avatar" />

            <div className="mt-2">
              <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">Jane Doe</h3>
              <span className="mt-1 font-medium text-gray-600 dark:text-gray-300">Co-founder</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}

export default Support
