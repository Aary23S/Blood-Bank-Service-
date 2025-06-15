document.getElementById("searchForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const bloodType = document.getElementById("bloodType").value.trim();
  const location = document.getElementById("location").value.trim();

  // Simulate search result
  const mockDonors = [
    { name: "Ahmed Khan", bloodType: "A+", location: "Mumbai", contact: "9876543210" },
    { name: "Sara Ali", bloodType: "A+", location: "Mumbai", contact: "9123456780" },
    { name: "Rohan Mehta", bloodType: "A+", location: "Mumbai", contact: "9012345678" }
  ];

  const results = mockDonors
    .filter(donor => donor.bloodType === bloodType && donor.location.toLowerCase() === location.toLowerCase())
    .map(donor => `<div class='card'>
                    <p><strong>Name:</strong> ${donor.name}</p>
                    <p><strong>Blood Type:</strong> ${donor.bloodType}</p>
                    <p><strong>Contact:</strong> ${donor.contact}</p>
                  </div>`)
    .join("");

  document.getElementById("results").innerHTML = results || "<p>No donors found.</p>";
});

document.getElementById("donorForm").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Donor registered successfully! (Mock)");
  document.getElementById("donorForm").reset();
});
