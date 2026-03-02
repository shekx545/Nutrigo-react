import "./FoodDiary.css";
import foodData from "../../data/foodData/foodData";

const FoodDiary = () => {
  return (
    <div className="food-diary">
      <div className="controls">
        <input type="text" placeholder="Search menu" className="search" />
        <button className="filter-btn">Filter</button>

        <div className="right-controls">
          <button className="week-btn">This Week</button>
          <button className="add-btn">+ Add</button>
        </div>
      </div>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th></th>
              <th>Date & Time</th>
              <th>Category</th>
              <th>Menu</th>
              <th>Amount</th>
              <th>Cals</th>
              <th>Carbs</th>
              <th>Protein</th>
              <th>Fats</th>
              <th>Sugar</th>
              <th>Thoughts</th>
            </tr>
          </thead>

          <tbody>
            {foodData.map((item) => (
              <tr key={item.id}>
                <td>
                  <input type="checkbox" />
                </td>

                <td>
                  {item.date}
                  <br />
                  <span className="time">{item.time}</span>
                </td>

                <td>
                  <span className={`badge ${item.category.toLowerCase()}`}>
                    {item.category}
                  </span>
                </td>

                <td>{item.menu}</td>
                <td>{item.amount}</td>
                <td>{item.calories} kcal</td>

                <td>
                  <span className="macro">{item.carbs} gr</span>
                </td>
                <td>
                  <span className="macro">{item.protein} gr</span>
                </td>
                <td>
                  <span className="macro">{item.fats} gr</span>
                </td>

                <td>{item.sugar} gr</td>

                <td>
                  <span className="thought">{item.thoughts}</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pagination">
          <span>Showing 1 - {foodData.length}</span>

          <div className="pages">
            <button className="page active">1</button>
            <button className="page">2</button>
            <button className="page">3</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodDiary;
