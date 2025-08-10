import arshiaimg from "../assets/arshiaimg.png";
import neilimg from "../assets/neilimg.png";
import yaoimg from "../assets/yaoimg.png";

function Team() {
  return (
    <div className="p-6 space-y-6">
      <h2 className="text-3xl font-bold text-center">Meet the Team</h2>
      <p className="text-center max-w-xl mx-auto">
        This project is led by researchers at Rutgers WINLAB as part of the 2025 summer initiative.
      </p>

      <div className="flex justify-center items-start gap-12 flex-wrap">
        <div className="flex flex-col items-center text-center space-y-1">
          <img src={arshiaimg} alt="Arshia Garg" className="w-20 h-20 object-cover rounded-full shadow" />
          <h3 className="text-lg font-semibold">Arshia Garg</h3>
          <p className="text-sm text-gray-600">Researcher</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-1">
          <img src={neilimg} alt="Neil Samant" className="w-20 h-20 object-cover rounded-full shadow" />
          <h3 className="text-lg font-semibold">Neil Samant</h3>
          <p className="text-sm text-gray-600">Researcher</p>
        </div>

        <div className="flex flex-col items-center text-center space-y-1">
          <img src={yaoimg} alt="Yao Liu" className="w-20 h-20 object-cover rounded-full shadow" />
          <h3 className="text-lg font-semibold">Yao Liu</h3>
          <p className="text-sm text-gray-600">Faculty Advisor</p>
        </div>
      </div>
    </div>
  );
}

export default Team;
