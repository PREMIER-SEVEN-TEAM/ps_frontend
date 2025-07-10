import React, { useEffect, useState } from "react";
import axiosInstance from "../../shared/lib/axiosInstance";

type Item = {
  itemPk: number;
  itemName: string;
};

const TestPage: React.FC = () => {
  const [itemName, setItemName] = useState("");
  const [items, setItems] = useState<Item[]>([]);

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
      setItems(res.data); // itemPk, itemName을 가진 배열
    } catch (err) {
      console.error("get 에러", err);
    }
  };

  useEffect(() => {
    fetchItems();
  }, []);

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
          <li key={i}>{item.itemName}</li>
        ))}
      </ul>
    </div>
  );
};

export default TestPage;
