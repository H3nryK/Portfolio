import { IoIosCloudDownload } from "react-icons/io";

const CTASection = () => {
    return (
      <section className="py-16" id="cta">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Interested in Working Together?
          </h2>
          <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
            Download my CV to learn more about my experience and skills, 
            or reach out directly to discuss potential opportunities.
          </p>
          <div className="flex justify-center space-x-4">
            <button 
              className="inline-flex items-center px-6 py-3 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-300"
            >
              <IoIosCloudDownload className="w-5 h-5 mr-2" />
              Download CV
            </button>
          </div>
        </div>
      </section>
    );
}

export default CTASection;