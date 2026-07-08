import { User, Briefcase, GraduationCap, Award } from "lucide-react";

export default function AboutMe() {
  return (
    <section id="about" className="py-16 md:py-24 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-12">
          About <span className="text-blue-600">Me</span>
        </h2>

        <div className="max-w-4xl mx-auto">
          {/* الملخص الشخصي */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8 mb-8">
            <div className="flex items-start gap-4">
              <User className="w-8 h-8 text-blue-600 shrink-0 mt-1" />
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Full-Stack Developer
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  Full-stack developer with experience in React, Node.js, and
                  SQL/NoSQL databases. Built Uni Store, a bilingual student book
                  marketplace, and Ishara, an Arabic Sign Language recognition
                  platform. First Place, University Innovation Pioneers Camp
                  2025. Seeking a full-stack role to grow and contribute on a
                  real team.
                </p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <GraduationCap className="w-5 h-5 text-blue-600" />
                <h4 className="font-semibold text-gray-800">Education</h4>
              </div>
              <p className="text-gray-600 text-sm">
                Syrian Virtual University — B.S., Software Engineering (In
                Progress)
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-2">
                <Award className="w-5 h-5 text-yellow-500" />
                <h4 className="font-semibold text-gray-800">Awards</h4>
              </div>
              <p className="text-gray-600 text-sm">
                First Place — University Innovation Pioneers Camp (2025)
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
