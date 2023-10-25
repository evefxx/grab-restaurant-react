import React, { useState } from 'react';
import axios from 'axios';
import api from "../services/api"


const Add = () => {
    const [restaurant, setRestaurants] = useState ({
        name: "",
        type: "",
        imgurl: "",
    });
    const navigate = useNavigate()
    const [error, setError] = useState(false);

    const handleChange = (e) => {
        setRestaurants((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const handleClick = async (e) => {
        try {
            await api.post(`/restaurants`, restaurant);
            navigate("/");
        } catch (error) {
            console.error(error);
            setError(true);
        }
    };

    const handleClear = (e) => {
        setRestaurants({
            name: "",
            type: "",
            imgurl: "",
        })
    };

    return (
        <div>
            <h2 className="text-center">Add Menu</h2>
            {updateSuccess && ( // แสดงข้อความเมื่ออัปเดตสำเร็จ
                <div className="alert alert-success form-label" role="alert">
                    เพิ่มเมนูอาหารแล้ว!
                </div>
            )}
            <form className="container-sm">
                <div className="mb-3">
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">
                            ชื่อเมนู:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            name="name"
                            value={menu.name}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="type" className="form-label">
                            ประเภท:
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="type"
                            name="type"
                            value={menu.type}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="img" className="form-label resized-image">
                            URL รูปภาพ:
                        </label>
                        <input
                            type="url"
                            className="form-control"
                            id="img"
                            name="img"
                            value={menu.img}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label className='form-label'>ตัวอย่างรูปภาพ:</label>
                        <br />
                        <img src={menu.img} className="img-fluid resized-image"
                        />
                    </div>
                </div>
                <div className="d-grid gap-2">
                    <button type="button" className="btn btn-success form-control" onClick={handleAddMenu}>
                        เพิ่มเมนูอาหาร
                    </button>
                    <button type="button" className="btn btn-danger form-control" onClick={handleCancel}>
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Add;