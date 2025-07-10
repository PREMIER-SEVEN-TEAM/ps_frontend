import React, { useEffect, useState } from "react";
import axiosInstance from "../../shared/lib/axiosInstance";

const TestPage: React.FC = () => {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState<string[]>([]);

  const handleSubmit = async () => {
    try {
      await axiosInstance.post("/item", { itemName });
      alert("post 성공");
      fetchItems();
    } catch (err) {
      console.error("post 에러", err);
    }
  };

  const fetchItems = async () => {
    try {
      const res = await axiosInstance.get("/item");
      setItems(res.data);
    } catch (err) {
      console.error("get 에러", err);
    }
  };

  useEffect(() => {}, []);

  return (
    <div style={{ padding: "2rem", color: "white" }}>
      <h2>아이템 테스트</h2>
      <input
        type="text"
        value={itemName}
        onChange={(e) => setItemName(e.target.value)}
        placeholder="itemName 입력"
        style={{ marginRight: "1rem" }}
      />
      <button onClick={handleSubmit}>추가</button>

      <hr style={{ margin: "2rem 0" }} />

      <h3>아이템 리스트</h3>
      <ul>
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
