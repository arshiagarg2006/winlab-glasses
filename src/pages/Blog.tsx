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

      <article className="space-y-4">
        <h3 className="text-2xl font-semibold">Week 3 - Labeling</h3>
        <p>
          This week, we narrowed our project scope to focus on eye strain and attention tracking,
          though hand-based applications remain a secondary possibility. Our primary goal is to use
          RGB and eye tracking data in tandem with SLAM data to identify user fatigue and attention shifts.
        </p>
        <p>
          We explored different data streaming profiles and frame rates to evaluate system performance.
          Additionally, we began using Roboflow to annotate and train a model for blink rate detection.
          While attempting eye detection with HuggingFace models and others, we found many required full-face
          input rather than just eyes, leading to dataset and model refinement.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vRKe-_ITxtSE5-5sKXpRcheeXddcGU4nrslvIewV06HZfciZ8FF2eBmh6ToDZooDFtMsOKVlYhp64XC/pubembed?start=false&loop=false&delayms=3000"
            width="100%"
            height="480"
            allowFullScreen
            title="Week 3 Presentation"
          ></iframe>
        </div>
      </article>

      <article className="space-y-4">
        <h3 className="text-2xl font-semibold">Week 4 - Labeling</h3>
        <p>
        This week, we focused on refining our eye tracking and RGB-based system for detecting visual focus 
        and eye strain. Using the MPS Viewer, we successfully overlaid eye gaze angles on RGB streams to visualize 
        attention patterns. We also continued training object detection models in Roboflow and saw promising results 
        using pre-trained YOLO models to identify on-screen items with high accuracy.
        </p>
        <p>
        In parallel, we developed a script that monitors new image creation and feeds them into our model 
        for real-time predictions. This sets the stage for an alert system based on blink patterns—potentially 
        warning users about prolonged eye closure or signs of fatigue.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vTzxqAsdvCA4ip2HwStikfQXxePjsxj4_VEm8yrm-2YGzucaqhjfwoXCT2fnZjmNUJNbMQaBXgjzDHx/pubembed?start=false&loop=false&delayms=3000"
            width="100%"
            height="480"
            allowFullScreen
            title="Week 4 Presentation"
          ></iframe>
        </div>
      </article>

      <article className="space-y-4">
        <h3 className="text-2xl font-semibold">Week 5 - Eye Glint</h3>
        <p>
        We modified the Project Aria codebase to allow direct image input into the eye tracking model, enabling 
        real-time inference instead of relying on recorded VRS files. We discovered that the model’s use of infrared 
        glints could also indicate whether the eyes are open or closed, eliminating the need for a separate 
        eye state classifier. Aria’s built-in IR LEDs create glint patterns that, when absent, typically indicate 
        eye closure, unless the user is looking upward, in which case a high pitch value helps disambiguate.
        </p>
        <p>
        We batch-tested eye images, validated predictions using both glint detection and model uncertainty, 
        and built a temporary visualization tool to show gaze points. This improved the reliability of gaze 
        estimation and established a method for labeling frame-level prediction quality.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
            src="https://docs.google.com/presentation/d/e/2PACX-1vS4fJ5Nce6AIIWo-PYVlBVagyqFHR75BUyy1rdxYd9JrWPDs_VKG_fS4DQD5XeJdH-uH_bWN2A3RkDE/pubembed?start=false&loop=false&delayms=3000"
            width="100%"
            height="480"
            allowFullScreen
            title="Week 5 Presentation"
          ></iframe>
        </div>
      </article>


      <article className="space-y-4">
        <h3 className="text-2xl font-semibold">Week 6 - Real-Time Optimization</h3>
        <p>
        This week, we focused on improving the performance and reliability of our eye strain detection pipeline. We finalized a method to detect closed eyes using infrared glints, pitch angles, and model uncertainty—achieving ~95% accuracy. This eliminated the need for a separate eye state classifier.
        </p>
        <p>
        We also addressed increasing delays in inference timing. While shorter recordings (under 30s) processed within 5 seconds, longer sessions saw delays of 25–35 seconds. To mitigate this, we began testing lighter YOLOv8 models and reduced the inference frequency to one frame every 0.5 seconds.
        </p>
        <p>
          Additionally, we continued experimenting with gaze-guided object detection. While results were promising, occasional misses and latency indicated the need for further optimization. Finally, we began designing a GUI dashboard and implemented CSV-based logging of real-time object predictions for future analysis.
        </p>
        <div className="aspect-w-16 aspect-h-9">
          <iframe
  src="https://docs.google.com/presentation/d/168ELTqS3cjrkbcRBkhiZBawtU9z1DwSYoAHbKycNdZs/embed?start=false&loop=false&delayms=3000"
  width="100%"
  height="480"
  allowFullScreen
  title="Week 6 Presentation"
></iframe>
        </div>
      </article>

      {/* Add more weeks here following the same structure */}

    </div>
  );
}

export default Blog;