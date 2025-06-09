function Blog() {
  return (
    <div className="p-6 space-y-10">
      <h2 className="text-3xl font-bold">Blog Updates</h2>

      <article className="space-y-4">
        <h3 className="text-2xl font-semibold">Week 1 - Setup & Recording</h3>
        <p>
          We began by configuring the Aria AR glasses system, ensuring successful
          connection to the Pixel device. Using the provided tools, we performed
          several test recordings and learned how to convert VRS files to MPS and MP4 formats.
        </p>
        <p>
          SLAM and IMU data was recorded while testing eye and hand movement under various
          lighting and environmental conditions. This week's goal was to ensure robust
          data capture pipelines.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/1PWYarQYeEIO7TA1atJW4NOK5-BpFw9lmVcAo6A0Hyc4/embed?start=false&loop=false&delayms=3000"
            width="100%"
            height="480"
            allowFullScreen
            title="Week 1 Presentation"
          ></iframe>
        </div>
      </article>

      <article className="space-y-4">
        <h3 className="text-2xl font-semibold">Week 2 - Feature Engineering</h3>
        <p>
          We parsed the MPS data for eye tracking and SLAM sessions, identifying
          landmark points relevant for visual strain detection. A set of engineered
          features such as gaze angle velocity, blink frequency, and fixation
          duration were extracted for each time segment.
        </p>
        <p>
          Exploratory visualizations were generated to understand temporal eye
          behavior across different sessions. Early signs of pattern recognition
          suggest temporal clustering aligned with screen fatigue.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/1fmVSHCj6VlY5i-AhQ0q6xjYVISlW5xV-SetOIl6jdJU/embed?start=false&loop=false&delayms=3000"
            width="100%"
            height="480"
            allowFullScreen
            title="Week 2 Presentation"
          ></iframe>
        </div>
      </article>

      {/* Add more weeks here following the same structure */}

    </div>
  );
}

export default Blog;