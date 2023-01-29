import React from "react";

const Kelton = () => {
  const [apartments, setApartments] = useState([]);
  const apartmentsCollectionRef = collection(db, "apartments");
  const [newSearch, setNewSearch] = useState("");

  useEffect(() => {
    const getApartments = async () => {
      const q = query(collection(db, "apartments"));
      const data = await getDocs(q);
      setApartments(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getApartments();
  }, []);

  return (
    <div>
      <h1>Cheeks</h1>
    </div>
  );
};

export default Kelton;
