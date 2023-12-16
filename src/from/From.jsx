

const From = () => {
    const alldata = event =>{
        event.preventDefault();
        const from =event.target;
        const name = from.name.value;
        const photo = from.photo.value;
        const address = from.address.value;
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
        const totalLonghi = Number(talukdar) + Number(palki) +Number(sobar) + Number(ashik) + Number(defenc) + Number(sonko) ;
        const totalMony = Number(totalTalukdarValue) + Number(totalPalkiValue) + Number(totalSobarValue) + Number(totalDefencValue) + Number(totalAshikValue) + Number(totalSonkoValue);
        const r ={name,photo,address,talukdar,palki,sobar,ashik,defenc,sonko,totalTalukdarValue,totalPalkiValue,totalSobarValue,totalAshikValue,totalDefencValue,totalSonkoValue,totalLonghi,totalMony};
        console.log(r);






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
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500 ">তালুকদার লুঙ্গি:</span>
                        </label>
                        <input type="number" name='talukdar' placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">পালকি লুঙ্গি:</span>
                        </label>
                        <input type="number" name='palki' placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">সবার উপর লুঙ্গি:</span>
                        </label>
                        <input type="number" name='sobar' placeholder="লুঙ্গির পরিমাণ " className="input input-bordered w-40" required />
                    </div>
                </div>
                <div className="flex justify-around">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500 ">আশিক লুঙ্গি:</span>
                        </label>
                        <input type="number" name='ashik' placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">ডিফেন্স লুঙ্গি:</span>
                        </label>
                        <input type="number" name='defenc' placeholder="লুঙ্গির পরিমাণ" className="input input-bordered w-40" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text text-cyan-500">শঙ্খ লুঙ্গি:</span>
                        </label>
                        <input type="number" name='sonko' placeholder="লুঙ্গির পরিমাণ " className="input input-bordered w-40" required />
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