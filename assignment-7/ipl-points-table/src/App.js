import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [iplData, setIplData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API endpoint
    fetch('https://my-json-server.typicode.com/FreSauce/json-ipl/data')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Sort data by NRR in ascending order
        const sortedData = [...data].sort((a, b) => a.NRR - b.NRR);
        setIplData(sortedData);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
        setError('Failed to fetch IPL data. Please try again later.');
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="loading">Loading IPL data...</div>;
  if (error) return <div className="error">{error}</div>;

  // Function to determine team icon URL (since actual icons aren't in the API)
  const getTeamIconUrl = (teamName) => {
    // Map team names to placeholder icons or actual icons if available
    const teamIcons = {
      'Gujarat Titans': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/GT/Logos/Medium/GTmedium.png',
      'Rajasthan Royals': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RR/Logos/Medium/RRmedium.png',
      'Lucknow Super Giants': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/LSG/Logos/Medium/LSGmedium.png',
      'Royal Challengers Bangalore': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/RCB/Logos/Medium/RCBmedium.png',
      'Delhi Capitals': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/DC/Logos/Medium/DCmedium.png',
      'Punjab Kings': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/PBKS/Logos/Medium/PBKSmedium.png',
      'Kolkata Knight Riders': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/KKR/Logos/Medium/KKRmedium.png',
      'Sunrisers Hyderabad': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/SRH/Logos/Medium/SRHmedium.png',
      'Chennai Super Kings': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/CSK/logos/Medium/CSKmedium.png',
      'Mumbai Indians': 'https://bcciplayerimages.s3.ap-south-1.amazonaws.com/ipl/MI/Logos/Medium/MImedium.png'
    };
    
    return teamIcons[teamName] || 'https://via.placeholder.com/30';
  };

  return (
    <div className="app-container">
      <h1>IPL 2022 Points Table</h1>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Team</th>
              <th>Matches</th>
              <th>Won</th>
              <th>Lost</th>
              <th>Tied</th>
              <th>NRR</th>
              <th>Points</th>
            </tr>
          </thead>
          <tbody>
            {iplData.map((team) => (
              <tr key={team.No}>
                <td className="team-cell">
                  <div className="team-info">
                    <img 
                      src={getTeamIconUrl(team.Team)} 
                      alt={`${team.Team} logo`} 
                      className="team-icon"
                      onError={(e) => { e.target.src = 'https://via.placeholder.com/30'; }}
                    />
                    <span>{team.Team}</span>
                  </div>
                </td>
                <td>{team.Matches}</td>
                <td>{team.Won}</td>
                <td>{team.Lost}</td>
                <td>{team.Tied}</td>
                <td>{team.NRR.toFixed(3)}</td>
                <td>{team.Points}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;