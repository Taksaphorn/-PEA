import './form.css';

const RequestToUse = (props) => {
    return (
        <div className='RequestToUse'>
            <div className='h2'>
                <h2>ข้อมูล</h2>
            </div>
                <div className='user'>
                    ชื่อ : <input type='text'></input> 
                    นามสกุล : <input type='text'></input> 
                </div>
                    <div className='p'>
                        <p>สิทธิ์ : ดูได้อย่างเดียว</p>
                    </div>
                        <div className='user-reason'>
                            <select id='reason' className="list">
                            <option  value="" disabled selected hidden classname='hl'>เหตุผล</option>
                            <option value="">นักเรียนทุน กฟภ.</option>
                            <option value="">งานที่รับผิดชอบอยู่มีความเกี่ยวข้อง</option>
                            <option value="">เพื่อทำการศึกษาหรือวิจัย/นวัตกรรม</option>
                            <option value="">ได้รับมอบหมายงานที่เกี่ยวข้องเพิ่มเติม</option>
                            <option value="">ความสนใจส่วนตัว</option>
                            <option value="">ต้องการเข้าถึงการไฟฟ้าในสังกัด</option>
                            <option value="">ต้องการเข้าถึงการไฟฟ้าหลัก</option>
                            <option value="">ต้องการเข้าถึงการไฟฟ้าใกล้เคียง</option>
                            <option value="custom">เหตุผลอื่นๆ(โปรดระบุในหมายเหตุ) </option>
                            <input type="text" id="customReason" className="custom-reason" placeholder="Custom Reason" style={{ display: 'none' }} />
                            </select>
                            
                        </div>
             <button type="submit" className="send-button">ยืนยัน</button>
             <button type="cancel" className="cancel-button">ยกเลิก</button>
        </div>
    )        
    
}

export default RequestToUse 