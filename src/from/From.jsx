import axios from "axios";


const From = () => {
    const alldata = event =>{
        event.preventDefault();
        const from =event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const address = from.address.value;
        const date = from.date.value;
        const sellerAddress = from.sellsaddress.value;
        const sellernumber = from.sellernumber.value;
        const talukdar = from.talukdar.value;
        const totalTalukdarValue = talukdar*2000;
        const palki = from.palki.value;
        const totalPalkiValue = palki*1100;
        const sobar =from.sobar.value;
        const totalSobarValue = sobar*1000;
        const ashik = from.ashik.value;
        const totalAshikValue = ashik*1000;
        const defenc = from.defenc.value;
        const totalDefencValue = defenc*1280;
        const sonko = from.sonko.value;
        const totalSonkoValue = sonko*890;
        const badon = from.badon.value ;
        const totalBadonValue = badon*1900;
        const shahi = from.shahi.value;
        const totalShahiValue = shahi*840;
        const chowthar = from.chowthar.value;
        const totalChowtharValue = chowthar*1800;
        // total longi sumestion 
        const totalLonghi = Number(talukdar) + Number(palki) +Number(sobar) + Number(ashik) + Number(defenc) + Number(sonko) + Number(badon) + Number(chowthar) +Number(shahi) ;
        // total mony sumestion 
        const totalMony = Number(totalTalukdarValue) + Number(totalPalkiValue) + Number(totalSobarValue) + Number(totalDefencValue) + Number(totalAshikValue) + Number(totalSonkoValue) + Number(totalBadonValue) + Number(totalChowtharValue) +Number(totalShahiValue) ;
        const r ={name,photo,address,talukdar,palki,sobar,ashik,defenc,sonko,totalTalukdarValue,totalPalkiValue,totalSobarValue,totalAshikValue,totalDefencValue,totalSonkoValue,totalLonghi,totalMony,date,sellerAddress,sellernumber,badon,shahi,chowthar,totalBadonValue,totalChowtharValue,totalShahiValue};
        console.log(r);
        axios.post('http://localhost:5000/dailyhisab',r
        )
        .then(res=>{console.log(res)})
        .catch(err=>{console.log(err)})

    }
    return (
        <div>
            <form onSubmit={alldata} >
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500 ">ক্রেতার নাম:</span>
                        </label>
                        <input type="text" name='name' placeholder="ক্রেতার নাম" className="input input-bordered w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">ঠিকানা:</span>
                        </label>
                        <input type="text" name='photo' placeholder="ঠিকানা দাও" className="input input-bordered w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">মোবাইল নাম্বার:</span>
                        </label>
                        <input type="text" name='address' placeholder="মোবাইল নাম্বার দাও " className="input input-bordered w-96" required />
                    </div>
                </div>
                {/* 2nd row for address  */}
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500 ">তারিখ:</span>
                        </label>
                        <input type="date" name='date' placeholder="তারিখ" className="input input-bordered w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500"> বিক্রেতার ঠিকানা:</span>
                        </label>
                        <input type="text" name='sellsaddress' defaultValue={"কুমার খালী"} placeholder="ঠিকানা দাও" className="input input-bordered w-96" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">বিক্রেতার মোবাইল নাম্বার:</span>
                        </label>
                        <input type="text" name='sellernumber' defaultValue={+8801714443149} className="input input-bordered w-96" required />
                    </div>
                </div>
                {/* 1st row */}
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500 ">তালুকদার লুঙ্গি:</span>
                        </label>
                        <input type="number" name='talukdar' defaultValue={0} placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">পালকি লুঙ্গি:</span>
                        </label>
                        <input type="number" name='palki' defaultValue={0} placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">সবার উপর লুঙ্গি:</span>
                        </label>
                        <input type="number" name='sobar' defaultValue={0} placeholder="লুঙ্গির পরিমাণ " className="input input-bordered w-40" required />
                    </div>
                </div>
                {/* 2nd rows */}
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500 ">আশিক লুঙ্গি:</span>
                        </label>
                        <input type="number" name='ashik' defaultValue={0} placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">ডিফেন্স লুঙ্গি:</span>
                        </label>
                        <input type="number" name='defenc' defaultValue={0} placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">শঙ্খ লুঙ্গি:</span>
                        </label>
                        <input type="number" name='sonko' defaultValue={0} placeholder="লুঙ্গির পরিমাণ " className="input input-bordered w-40" required />
                    </div>
                </div>
                {/* 3nd row */}
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500 ">বাঁধন লুঙ্গি:</span>
                        </label>
                        <input type="number" name='badon' defaultValue={0} placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">শাহী লুঙ্গি:</span>
                        </label>
                        <input type="number" name='shahi' defaultValue={0} placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">চৌতার লুঙ্গি:</span>
                        </label>
                        <input type="number" name='chowthar' defaultValue={0} placeholder="লুঙ্গির পরিমাণ " className="input input-bordered w-40" required />
                    </div>
                </div>

                <div className="form-control mt-6 mx-64">
                    <button className="btn order-blue-400 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500  text-white hover:text-black">Order Now!</button>


                </div>

            </form>

        </div>
    );
};

export default From;