

const Json = ({data}) => {
    const {name ,date,totalMony,totalLonghi} = data
    // console.log(s)
    
    return (
        <div>
            <div className="flex">
                <h3><span>নাম:</span>{name}</h3>
                <h3><span>তারিখ:</span>{date}</h3>
                <h3><span>মোট কাপড়ের পরিমাণ:</span>{totalLonghi}</h3>
                <h3><span>মোট টাকা:</span>{totalMony}</h3>
            </div>
     

        </div>
    );
};

export default Json;