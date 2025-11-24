import React from 'react'

const WelcomeMessage = () => {
	return (
		<section className="bg-white py-12">
			<div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
				<div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 flex flex-col sm:flex-row items-center gap-6 border border-black">
					<div className="flex-shrink-0">
						<div className="w-20 h-20 sm:w-28 sm:h-28 rounded-full bg-red-600 flex items-center justify-center text-white text-2xl font-bold shadow-md">
							S
						</div>
					</div>

					<div className="text-center sm:text-left">
						<h1 className="text-2xl sm:text-3xl font-extrabold text-black">Welcome to Skan</h1>
						<p className="mt-2 text-black text-opacity-70">Discover insights, manage data, and collaborate — all in one beautiful place.</p>

						<div className="mt-4 flex justify-center sm:justify-start flex-wrap gap-3">
							<a href="#" className="inline-flex items-center px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md shadow hover:bg-red-700 transition">Get started</a>
							<a href="#" className="inline-flex items-center px-4 py-2 border border-black text-sm text-black rounded-md bg-white hover:bg-black hover:text-white transition">Learn more</a>
						</div>
					</div>
				</div>

				<p className="mt-6 text-sm text-black text-opacity-70 text-center">Tip: Try searching or creating your first project to begin.</p>
			</div>
		</section>
	)
}

export default WelcomeMessage

