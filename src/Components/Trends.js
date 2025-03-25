import React, { useEffect } from "react";

function Trends() {
  useEffect(() => {
    // Load Google Trends script dynamically
    const script = document.createElement("script");
    script.src = "https://ssl.gstatic.com/trends_nrtr/4031_RC01/embed_loader.js";
    script.async = true;
    script.onload = () => {

        
      if (window.trends && window.trends.embed) {
        window.trends.embed.renderExploreWidget(
          "TIMESERIES",
          {
            comparisonItem: [
              { keyword: "/m/01hyh_", geo: "IN", time: "today 12-m" },
              { keyword: "Deep learning", geo: "IN", time: "today 12-m" },
              { keyword: "Generative AI", geo: "IN", time: "today 12-m" },
              { keyword: "Data Analytics", geo: "IN", time: "today 12-m" },
              { keyword: "Neural Networks", geo: "IN", time: "today 12-m" },
            ],
            category: 0,
            property: "",
          },
          {
            exploreQuery:
              "geo=IN&q=%2Fm%2F01hyh_,Deep%20learning,Generative%20AI,Data%20Analytics,Neural%20Networks&hl=en-GB&date=today 12-m",
            guestPath: "https://trends.google.com:443/trends/embed/",
          }
        );
      }
    };

    document.body.appendChild(script);
  }, []);

  return (
    <div>
      <section className="p-6 bg-gray-100 m-3">
        <div className="row">
          <div className="col-md-6">
            <h2 className="text-3xl font-bold mb-4"> Trending AI: Stay Ahead of the Curve</h2>
            <p className="text-lg text-gray-700 mb-2">
              Artificial Intelligence is transforming industries like healthcare, finance, and marketing.
              Keep up with the latest AI trends, including machine learning, deep learning, and generative AI.
            </p>
            <p className="text-lg text-gray-700 mb-4">Explore current AI search trends in India:</p>
          </div>

          <div className="col-md-6">
            {/* Google Trends Chart will be injected here */}
            <div id="trends-chart" className="flex justify-center border rounded-lg shadow-lg">

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Trends;
