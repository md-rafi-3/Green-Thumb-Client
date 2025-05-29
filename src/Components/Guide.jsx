import React, { useState } from 'react';

const seasonalData = {
  Spring: {
    focus: "Planning, planting, and preparing",
    tasks: [
      "Test and prepare soil with compost",
      "Start seeds indoors or in seed trays",
      "Prune shrubs and trees",
      "Divide perennials and transplant",
      "Mulch garden beds to retain moisture"
    ],
    plants: {
      vegetables: ["Lettuce", "Spinach", "Carrots", "Peas", "Radish", "Beets"],
      herbs: ["Parsley", "Cilantro", "Basil", "Dill"],
      flowers: ["Marigolds", "Petunias", "Zinnias", "Pansies"]
    }
  },
  Summer: {
    focus: "Growth, watering, and pest control",
    tasks: [
      "Water deeply early in the morning",
      "Watch for signs of pests and diseases",
      "Harvest fruits and vegetables regularly",
      "Deadhead flowers to promote blooming",
      "Shade sensitive plants if heat is extreme"
    ],
    plants: {
      vegetables: ["Tomatoes", "Cucumbers", "Beans", "Peppers", "Eggplants"],
      herbs: ["Mint", "Oregano", "Thyme"],
      flowers: ["Sunflowers", "Cosmos", "Nasturtiums"]
    }
  },
  Autumn: {
    focus: "Harvesting, cleaning, and preparing for rest",
    tasks: [
      "Harvest root crops and late vegetables",
      "Save seeds from healthy plants",
      "Plant garlic and spring bulbs",
      "Compost fallen leaves and clean garden beds",
      "Add cover crops or mulch for soil health"
    ],
    plants: {
      vegetables: ["Garlic", "Onions", "Spinach", "Kale"],
      herbs: ["Chives", "Sage"],
      flowers: ["Daffodils", "Tulips"]
    }
  },
  Winter: {
    focus: "Planning, learning, and indoor gardening",
    tasks: [
      "Clean and sharpen tools",
      "Design next year’s garden layout",
      "Order seeds and plan rotations",
      "Grow herbs or microgreens indoors",
      "Join community discussions or online workshops"
    ],
    plants: {
      vegetables: ["Microgreens", "Lettuce", "Green Onions"],
      herbs: ["Basil", "Rosemary", "Thyme"]
    }
  }
};

const Guide = () => {
  const [season, setSeason] = useState('Spring');

  const data = seasonalData[season];

  return (
    <div
      data-aos="fade-up"
      data-aos-duration="800"
      data-aos-once="false"
      data-aos-delay={200}
      className="mt-30 border-[#3e743e20] border shadow-sm rounded-2xl py-10"
    >
      <h1 className="text-3xl font-bold text-center">Seasonal Gardening Guide</h1>

      <div className="flex gap-5 md:flex-row flex-col w-11/12 mx-auto mt-10">
        <img
          className="rounded-2xl md:w-1/2 w-full"
          src="https://i.ibb.co/VWSV3JYG/istockphoto-1427666202-612x612.jpg"
          alt=""
        />
        <div className="space-y-3 md:w-1/2 w-full">
          <h1 className="text-2xl font-bold">What to Plant This Season</h1>
          <p className="text-accent">
            Each season brings different opportunities for planting and garden maintenance. Stay up-to-date with our seasonal guidelines to make the most of your garden year-round.
          </p>

          <ul className="list-disc pl-5">
            <li>Know the best vegetables to plant each month</li>
            <li>Learn essential maintenance tasks by season</li>
            <li>Prepare your garden for weather changes</li>
            <li>Discover season-specific gardening techniques</li>
          </ul>

          <button
            className="btn btn-primary"
            onClick={() => document.getElementById('seasonal_modal').showModal()}
          >
            View Seasonal Guide
          </button>
        </div>
      </div>

      {/* Modal */}
      <dialog id="seasonal_modal" className="modal">
        <div className="modal-box w-11/12 max-w-4xl">
          <h3 className="font-bold text-xl mb-2 text-center">🌿 Seasonal Gardening Guide</h3>

          <div className="flex flex-wrap justify-center gap-2 mb-4">
            {Object.keys(seasonalData).map((s) => (
              <button
                key={s}
                className={`btn btn-sm ${s === season ? 'btn-success' : 'btn-outline'}`}
                onClick={() => setSeason(s)}
              >
                {s}
              </button>
            ))}
          </div>

          <div className="text-sm max-h-[60vh] overflow-y-auto space-y-3 px-1">
            <p>
              <strong>🌟 Focus:</strong> {data.focus}
            </p>

            <div>
              <strong>🛠️ Top Tasks:</strong>
              <ul className="list-disc list-inside ml-4">
                {data.tasks.map((task, i) => (
                  <li key={i}>{task}</li>
                ))}
              </ul>
            </div>

            <div>
              <strong>🌿 What to Plant:</strong>
              <p>
                <strong>Vegetables:</strong> {data.plants.vegetables.join(', ')}
              </p>
              <p>
                <strong>Herbs:</strong> {data.plants.herbs.join(', ')}
              </p>
              {data.plants.flowers && (
                <p>
                  <strong>Flowers:</strong> {data.plants.flowers.join(', ')}
                </p>
              )}
            </div>
          </div>

          <div className="modal-action">
            <form method="dialog">
              <button className="btn text-white">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default Guide;
