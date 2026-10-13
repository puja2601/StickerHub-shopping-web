import React from "react";

const About = () => {
  return (
    <div className="min-h-screen px-6 py-20 dark:bg-gray-700 dark:text-white">
      <div className="max-w-6xl mx-auto">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-5">
            About <span className="text-pink-500">StickerHub</span>
          </h1>

          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 text-lg leading-8">
            Welcome to StickerHub — your one-stop destination for fun, creative,
            and expressive stickers. We believe a small sticker can add a big
            personality to your everyday life.
          </p>
        </div>

        {/* About StickerHub */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <h2 className="text-3xl font-bold mb-5">What is StickerHub?</h2>

            <p className="text-gray-600 dark:text-gray-300 leading-7 mb-4">
              StickerHub is an online sticker shopping platform designed for
              people who love creativity, personalization, and fun. From cute
              animals to colorful fruits, flowers, and food-themed designs, our
              collection brings something special to everyone.
            </p>

            <p className="text-gray-600 dark:text-gray-300 leading-7">
              Whether you want to decorate your laptop, notebook, phone, water
              bottle, or simply add some personality to your belongings,
              StickerHub makes it easy to discover stickers you'll love.
            </p>
          </div>

          <div className="bg-pink-100 dark:bg-gray-600 rounded-3xl p-10 text-center">
            <div className="text-7xl mb-5">🌈✨</div>
            <h3 className="text-2xl font-bold mb-3">Stick. Express. Enjoy.</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Your personality deserves a little space to shine.
            </p>
          </div>
        </div>

        {/* Mission */}
        <div className="text-center mb-20">
          <h2 className="text-3xl font-bold mb-5">Our Mission</h2>

          <p className="max-w-3xl mx-auto text-gray-600 dark:text-gray-300 leading-8">
            Our mission is to make creative and expressive stickers easily
            accessible while providing a simple, enjoyable, and user-friendly
            shopping experience.
          </p>
        </div>

        {/* Why StickerHub */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold text-center mb-10">
            Why StickerHub?
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-600 text-center">
              <div className="text-4xl mb-4">🎨</div>
              <h3 className="font-bold text-xl mb-2">Creative Designs</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Discover fun and eye-catching sticker designs.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-600 text-center">
              <div className="text-4xl mb-4">🛍️</div>
              <h3 className="font-bold text-xl mb-2">Easy Shopping</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Browse, search, and find your favorite stickers easily.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-600 text-center">
              <div className="text-4xl mb-4">💖</div>
              <h3 className="font-bold text-xl mb-2">Made for You</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Choose stickers that match your personality and style.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-gray-100 dark:bg-gray-600 text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold text-xl mb-2">Simple Experience</h3>
              <p className="text-gray-600 dark:text-gray-300">
                Enjoy a clean and simple shopping experience.
              </p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-5">Explore Our Collection</h2>

          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Find something that matches your mood, interest, or personality.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-6 py-3 rounded-full bg-green-100 text-green-700">
              🐼 Animals
            </span>

            <span className="px-6 py-3 rounded-full bg-orange-100 text-orange-700">
              🍎 Fruits
            </span>

            <span className="px-6 py-3 rounded-full bg-pink-100 text-pink-700">
              🌸 Flowers
            </span>

            <span className="px-6 py-3 rounded-full bg-yellow-100 text-yellow-700">
              🍕 Food
            </span>
          </div>
        </div>

        {/* Closing */}
        <div className="text-center bg-gray-100 dark:bg-gray-600 rounded-3xl p-10">
          <h2 className="text-3xl font-bold mb-4">
            Add a Little More Personality ✨
          </h2>

          <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300 leading-7">
            At StickerHub, we believe creativity doesn't have to be big.
            Sometimes, it's just a tiny sticker that makes something feel
            uniquely yours.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
