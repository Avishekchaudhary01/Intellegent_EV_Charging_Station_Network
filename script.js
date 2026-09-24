const stations = [
    {
        name: "Station A",
        location: "Janakpur",
        chargers: 4,
        available: 2,
        power: "60 kW",
        price: "₹12/kWh"
    },
    {
        name: "Station B",
        location: "Pokhara",
        chargers: 6,
        available: 5,
        power: "120 kW",
        price: "₹10/kWh"
    },
    {
        name: "Station C",
        location: "Kathmandu",
        chargers: 8,
        available: 0,
        power: "150 kW",
        price: "₹14/kWh"
    }
];

const container = document.getElementById("stations");

stations.forEach(station => {

    const card = document.createElement("div");

    card.className = "station";

    const status = station.available > 0
        ? `<span class="available">Available</span>`
        : `<span class="busy">Full</span>`;

    card.innerHTML = `
        <h3>⚡ ${station.name}</h3>

        <p>📍 ${station.location}</p>

        <p>🔌 Chargers: ${station.chargers}</p>

        <p>🟢 Available: ${station.available}</p>

        <p>⚡ Power: ${station.power}</p>

        <p>💰 Price: ${station.price}</p>

        <p>Status: ${status}</p>

        ${
        station.available > 0
            ? `<button onclick="bookStation('${station.name}')">
                Book Charger
              </button>`
            : `<button disabled>
                Not Available
              </button>`
    }
    `;

    container.appendChild(card);
});

function bookStation(name) {
    alert(`You selected ${name}`);
}