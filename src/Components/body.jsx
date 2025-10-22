import React from "react";

const ministries = [
  {
    title: "Sunday Worship",
    description:
      "Every Sunday from 9:00 AM, we come together for a time of worship, prayer, and the Word—gathering as one family to encounter God and be strengthened for the week ahead",
  },
  {
    title: "prayer  meeting",
    description:
      "We have church prayers every Tuesday from 5:30–7:00 PM, women’s prayers on Wednesday from 8:00–10:00 AM, and on Thursdays we fast from 6:00 AM to 6:00 PM followed by prayers from 5:30–7:00 PM.",
  },
  {
    title: "Youth Ministry",
    description:
      "After the service, the youth come together for fellowship — a time to talk openly about life and faith, support each other, and share tea and snacks",
  },
  {
    title: "TV PROGRAMS",
    description:
      "We air our Kingdom TV program twice every week—on Saturdays from 6:30 to 7:00 PM, and on Sundays from 7:45 to 8:00 PM—sharing sermons from our previous services.",
  },
];

const Body = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Our Ministries
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          We offer various ministries to serve all age groups and help everyone
          grow in their faith.
        </p>
      </div>

      <div className="grid md:grid-cols-4 gap-8">
        {ministries.map((ministry, index) => (
          <div
            key={index}
            className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-transform transform hover:-translate-y-1"
          >
            <h3 className="text-xl font-semibold mb-3 text-purple-700">
              {ministry.title}
            </h3>
            <p className="text-gray-600">{ministry.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Body;
