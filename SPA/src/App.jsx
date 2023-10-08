import React, { useState } from "react";
import "./App.css";
import Modal from "./modal";

// Card Data

const cardsData = [
  {
    title: "Sobha HRC Pristine Luxury Apartments, Jakkuru- Luxury at its best!",
    description:
      "Sobha HRC Pristine is a green paradise in north Bengaluru. The luxury apartments in this property have access to clear sky, pure water, and untouched surroundings. Sobha HRC Pristine is located near Kempe Gowda International Airport, international schools, world-class hospitals, IT clusters, and recreational areas. Its newest residential property includes 3- and 4-bedroom luxury flats, penthouses, and rowhouses, making them one of the best flats in Bangalore.",
    image: "https://mygate.com/wp-content/uploads/2022/07/Sobha-HRC-1.png",
  },
  {
    title:
      "Prestige Kingfisher Towers Luxury Apartments, Lavelle Road- Elevated modern luxury",
    description:
      "These unique luxury apartments are in Bangalore Lavelle Road area. The project overlooks UB City and Cubbon Park, offering stunning views of the city most chic neighbourhoods. The 33-storeyed structure has flats starting from the 5th floor. The project features 3 towers—A, B, and C—each with 8,321 sq. ft. 4-bedroom apartments. Each unit of Prestige Kingfisher Towers has its own lift lobby, service lift area, and access to the clubhouse, pool, and gym. It is one of the top apartments in Bangalore to rent or own.",
    image: "https://mygate.com/wp-content/uploads/2022/07/kingfisher-2.png",
  },
  {
    title: "Prestige Leela Residences- Stellar amenities at your fingertips!",
    description:
      "The ultra-luxury residences in Kodihalli Prestige Leela Residences comprise an upmarket east Bangalore property. Prestige Leela Residences is exquisitely designed to resemble the Mysore Royal Palace. The 3-acre property has 88 units of 4 BHK luxury residences. Indulge in a traditional lifestyle at Prestige Leela—one of the best apartments in Bengaluru!",
    image: "https://mygate.com/wp-content/uploads/2022/07/leela-1.png",
  },
  {
    title: "Tata Promont Luxury Apartments, Banashankari- Your urban oasis",
    description:
      "The Tata Group, one of the country oldest and most renowned business houses, has forayed into real estate under the brand Tata Housing. It has created the Promont atop Banashankari hill, Hosakerehalli in south Bangalore. Tata Promont is one of the best luxury apartments in Bangalore and among south Bangalore’s most iconic residential spaces.",
    image: "https://mygate.com/wp-content/uploads/2022/07/tata-1.png",
  },
  {
    title: "RMZ Latitude- Lifestyle you deserve!",
    description:
      "RMZ Homes magnificent creativity in development and architecture is well-known. RMZ Lattitude in Hebbal, Bengaluru, is a premium property. The 3.92-acre home development features green-lined boulevards and gardens. The property has 122 units of 3- and 4-BHK apartments with modern amenities. Rich, stylish decor, and international-standard amenities make RMZ Latitude one of the best apartments in Bangalore for rent and ownership.  ",
    image: "https://mygate.com/wp-content/uploads/2022/07/rmz-1.png",
  },
  {
    title: "Embassy One Four Seasons—Upscale living",
    description:
      "The Embassy Group is one of the largest realty developers, with 54 million sq. ft. of real estate developments across India, Europe, and East Asia. The group ultra-luxury Embassy One Four Seasons caters to affluent clients. It is a 2.96-acre property with 109 ultra-luxurious apartments. The facilities on offer are a’ la carte services, limousine service, butterfly gardens, pools, and saloon services. North Tower contains 1- and 2-BHK apartments and South Tower has 3- and 4-BHK flats. The best apartments in Bangalore for rent or purchase are the 2-BHK luxury properties at Embassy One Four Seasons.",
    image: "https://mygate.com/wp-content/uploads/2022/07/embessy-1.png",
  },
  {
    title: "Phoenix One- Best luxury apartments in Bangalore west",
    description:
      "Phoenix One is truly iconic. International architects Benoy and RSP built this 30-storey skyscraper to please selective clientele. The roughly 17-acre site features a beautifully planted green zone developed by Site Concepts of Singapore. Phoenix One Bangalore West provides vast, expansive apartments overlooking the cityscape comprising 4-bed homes with family and study facilities, 3-bed homes, 2-bed homes with a family room, and penthouses. Phoenix One is yet another property with the best apartments in Bangalore for rent. ",
    image: "https://mygate.com/blog/wp-content/uploads/2022/07/phoenix-1.png",
  },
  {
    title: "Phoenix Kessaku, Rajajinagar- Epicentre of luxury!",
    description:
      "Phoenix Mills Ltd is one of the country largest retail-led mixed-use developers, noted for its large-scale developments. Phoenix Kessaku can be counted as the developer most popular endeavour following mega-commercial successes. The property is located in Bangalore Rajajinagar area. The premium home property is modelled on a Zen sphere and Far East architecture with 110 units in 5 towers named Zora, Niwa, Mizu, Faia, and Zefa. It has an infinity pool, garden, mini theatre, and more. It is among the best apartments in Bangalore for rent.",
    image: "https://mygate.com/wp-content/uploads/2022/07/kassaru.png",
  },
  {
    title: "Karle Zenith Residences- Spacious modern living!",
    description:
      "Karle Infra is noted for its architecture and planning. Bangalore, Mysore, and Goa residents may be familiar with this developer. Karle Zenith is one of the top luxury apartments in Bangalore, combining high culture and a premium lifestyle. The project boasts several first-rate amenities. This 4-acre property has 396 units of 3- and 4-BHK apartments that are among the best flats in Bangalore.",
    image: "https://mygate.com/wp-content/uploads/2022/07/zenith-1.png",
  },
];

function App() {
  const [searchInput, setSearchInput] = useState("");
  const [selectedCard, setSelectedCard] = useState(null);

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    const input = event.target.value;
    setSearchInput(input);

    // Check if the input is empty, and reset selectedCard to null
    if (input.trim() === "") {
      setSelectedCard(null);
    } else {
      // Find the first card that matches the search input
      const foundCard = cardsData.find((card) =>
        card.title.toLowerCase().includes(input.toLowerCase())
      );

      if (foundCard) {
        setSelectedCard(foundCard);
      } else {
        setSelectedCard(null);
      }
    }
  };

  return (
    <div>
      {/* NAVBAR */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <a className="btn btn-ghost normal-case text-xl">Find Proprties</a>
        </div>
        <div className="flex-none gap-2">
          <div className="form-control">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
              value={searchInput}
              onChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>

      <br></br>

      {/* CARD GRID CONTAINER */}
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {selectedCard ? (
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
              <figure>
                <img
                  src={selectedCard.image}
                  alt={selectedCard.title}
                  style={{ width: "400px", height: "250px" }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{selectedCard.title}</h2>
                <p>{selectedCard.description}</p>
                <div className="card-actions justify-end">
                  <button className="btn" onClick={() => setSelectedCard(null)}>
                    Close
                  </button>
                </div>
              </div>
            </div>
          ) : (
            cardsData.map((card) => (
              <div
                key={card.title}
                className="card card-compact w-96 bg-base-100 shadow-xl"
              >
                <figure>
                  <img
                    src={card.image}
                    alt={card.title}
                    style={{ width: "400px", height: "250px" }}
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{card.title}</h2>
                  <p>{card.description}</p>
                  <div className="card-actions justify-end">
                    <Modal
                      className="btn"
                      onClick={() => setSelectedCard(card)}
                    ></Modal>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <br></br>
    </div>
  );
}

export default App;
