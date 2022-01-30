export default function LocationsGallery({ list }) {
    return (
      <div className="container">
          
        {list.map((item) => (
          
          <figure key={item.id} className="character">
            <figcaption>{item.name}</figcaption>
            <img src="https://cdn.computerhoy.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2021/06/rick-morty-2381623.jpg?itok=KBfLZ3O6" alt={item.name} />
            <figcaption>{item.type}</figcaption>
  
            
          </figure>
        ))}
      </div>
    );
  }