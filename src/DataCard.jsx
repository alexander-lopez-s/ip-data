const DataCard = ({ data }) => {
    return (
        <div className="card">
            <div className="card-header">
                <h2>📍 Location information</h2>
            </div>
            <div className="card-body">
                <p><strong>IP Address:</strong> {data.ip}</p>
                <p><strong>Country:</strong> {data.country_name}</p>
                <p><strong>City:</strong> {data.city}</p>
                <p><strong>Region:</strong> {data.region}</p>
                <p><strong>Continent:</strong> {data.continent_code}</p>
                <p><strong>Timezone:</strong> {data.timezone}</p>
                <p><strong>Longitude:</strong> {data.longitude}</p>
                <p><strong>Latitude:</strong> {data.latitude}</p>
                <p><strong>ISP:</strong> {data.org}</p>
            </div>
        </div>
    );
};

export default DataCard;
