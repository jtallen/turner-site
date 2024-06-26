import React from 'react';
import userData from '@constants/data';

export default function AboutMe() {
  return (
    <section className="bg-white dark:bg-gray-800">
      <div className="max-w-6xl mx-auto h-48 bg-white dark:bg-gray-800">
        <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
          About Me.
        </h1>
      </div>
      <div className="bg-[#F1F1F1] -mt-10 dark:bg-gray-900">
        <div className="text-container max-w-6xl mx-auto pt-20">
          <p
            className="leading-loose text-2xl md:text-4xl font-semibold  mx-4"
            style={{ lineHeight: '3rem' }}
          >
            {userData.about.title} <br />
            Currently working on{' '}
            <a
              className="bg-red-500 rounded-md px-2 py-1 text-white"
              href={userData.about.currentProjectUrl}
            >
              {userData.about.currentProject} 💻
            </a>
          </p>
        </div>
      </div>
      <div className="bg-[#F1F1F1] dark:bg-gray-900 px-4">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Contact
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                For any questions or inquiries, please reach out to me via{' '}
                <a
                  href={`mailto:${userData.email}`}
                  className="hover:border-indigo-500 hover:text-indigo-500 transition-all text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  email
                </a>{' '}
                and I will get back to you as soon as I can!
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                Job Opportunities
              </h1>
              <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                I am currently searching for a job! If you are hiring and
                interested in learning more about me, please check out my{' '}
                <a
                  href={userData.resumeUrl}
                  target="__blank"
                  className="hover:border-indigo-500 hover:text-indigo-500 transition-all text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  Resume
                </a>
                {', '}thanks!
              </p>
            </div>
            {/* Social Links */}
            <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
              Social Links
            </h1>
            <div className="mt-4 ml-4">
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.github}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    GitHub
                  </p>
                </a>
              </div>
              <div className="flex flex-row justify-start items-center">
                <a
                  href={userData.socialLinks.linkedin}
                  className="flex flex-row items-center space-x-4 group"
                >
                  <div className="my-4">&rarr;</div>
                  <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                    <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                    LinkedIn
                  </p>
                </a>
              </div>
            </div>
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              👋🏼 Hi there! I'm Turner. Welcome to my site 🙂
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              I'm a professional software engineer with three years' full time
              experience working across the stack. I'm especially inspired by
              the positive impact possible at the intersection of tech,
              government, and civic engagement, but can find joy in any cause
              using software to help improve lives.
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              When I'm not coding, you can find me out for a run, curled up with
              a good (or sometimes bad) sci-fi novel, or crafting new adventures
              for my D&D campaigns ⚔️🤓
            </p>
            <p className="text-xl text-gray-700 mb-4 dark:text-gray-300">
              🙋‍♂️ <strong>I'm looking for a job!</strong> I thrive in
              environments with humble, curious, kind folks. If you think I
              might be a fit, please{' '}
              <a
                href="mailto:jturnerallen@gmail.com"
                className="hover:border-indigo-500 hover:text-indigo-500 transition-alltext-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
              >
                reach out
              </a>{' '}
              - I'd love to hear from you.
            </p>

            <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
              Tech Stack
            </h1>
            <div className="flex flex-row flex-wrap mt-8">
              {/* TypeScript */}
              <img
                src="https://github.com/jtallen/turner-site/assets/6580472/aa528a20-c958-4103-9be6-f5678a9e72a7"
                className="h-20 w-20 mx-4 my-4"
                alt="TypeScript"
                title="TypeScript"
              />
              {/* ReactJS */}
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png"
                className="h-20 w-20 mx-4 my-4"
                alt="ReactJS"
                title="ReactJS"
              />
              {/* NodeJS */}
              <img
                src="https://github.com/jtallen/turner-site/assets/6580472/3312424f-8932-49f7-a6de-7a032ba1fc05"
                className="h-20 w-20 mx-4 my-4"
                alt="NodeJS"
                title="NodeJS"
              />
              {/* AWS */}
              <img
                src="https://github.com/jtallen/turner-site/assets/6580472/3205cb53-e2e5-426c-bf3a-aa7e8e4d5b39"
                className="h-20 w-20 mx-4 my-4"
                alt="AWS"
                title="AWS"
              />
              {/* Angular */}
              <img
                src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/angular/angular.png"
                className="h-20 w-20 mx-4 my-4"
                alt="Angular"
                title="Angular"
              />
              {/* NextJS */}
              <img
                src="https://user-images.githubusercontent.com/6580472/149031967-be05cb15-0fb5-4c72-93aa-aef907714676.png"
                className="h-20 w-20 mx-4 my-4"
                alt="Next.js"
                title="Next.js"
              />
              {/* Java */}
              <img
                src="https://user-images.githubusercontent.com/6580472/149032395-540dc9a6-896b-41df-b774-280fdc7ef484.jpeg"
                className="h-20 w-20 mx-4 my-4"
                alt="Java"
                title="Java"
              />
              {/* Spring */}
              <img
                src="https://user-images.githubusercontent.com/6580472/149035029-c973b3d7-e2d9-4361-92a8-3443172e5665.png"
                className="h-20 w-20 mx-4 my-4"
                alt="Spring"
                title="Spring"
              />
              {/* Python */}
              <img
                src="https://user-images.githubusercontent.com/6580472/149033328-fc29dda8-00dd-4564-8ff7-5b2641913f41.png"
                className="h-20 w-20 mx-4 my-4"
                alt="Python"
                title="Python"
              />
              {/* Git */}
              <img
                src="https://user-images.githubusercontent.com/6580472/149033594-df337c7f-248d-4962-ae8c-b4f4fefd8de9.png"
                className="object-contain w-20 mx-4 my-4"
                alt="Git"
                title="Git"
              />
              {/* Hasura */}
              <img
                src="https://user-images.githubusercontent.com/6580472/149032853-69952e1e-30b3-47b9-8366-b404ee914afc.png"
                className="h-20 w-20 mx-4 my-4"
                alt="Hasura"
                title="Hasura"
              />
              {/* GraphQL */}
              <img
                src="https://user-images.githubusercontent.com/6580472/149034752-792d0214-647f-4169-beb6-aaa75e4dab0e.png"
                className="h-20 w-20 mx-4 my-4"
                alt="GraphQL"
                title="GraphQL"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
