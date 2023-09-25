import React from 'react';
import Search from './Search';

function App() {
    return (
        <div>
            <input
                type="text"
                placeholder="ชื่อร้าน"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>ค้นหา</button>
            <input
                type="text"
                placeholder="ชื่ออาหาร"
                value={searchTerm}
                onChange={handleInputChange}
            />
            <button onClick={handleSearch}>ค้นหา</button>
        </div>
    );
}

export default App;
