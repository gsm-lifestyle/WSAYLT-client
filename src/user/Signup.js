import React, { useState } from "react";
import './Signup.scss';

function Signup() {
  const [visible1, setVisible1] = useState(true);
  const [visible2, setVisible2] = useState(true);
  const [nick, setNick] = useState('');
  const [pw, setPw] = useState('');
  const [repw, setRepw] = useState('');
  const [pwinco, setPwinco] = useState(false);
  return <div className="Signup">
    <h1><b>지루한 일상,<br /> 새로운 노래로<br /> 기분전환 해봐요.</b></h1>
    <div>
      <input className={`nickname ${nick && 'status'}`} onChange={e => setNick(e.target.value)} placeholder="닉네임을 입력해주세요." /><br />
      <input className={`pw ${pw && 'status'}`} onChange={e => setPw(e.target.value)} placeholder="비밀번호를 입력해주세요." type={(visible1 && 'password').toString()} />
      <div className="b1" onClick={() => setVisible1(e => !e)}>
        {!visible1 ? <svg width={'20px'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" width={'20px'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        }
      </div>
      <div className="b2" onClick={e => setVisible2(e => !e)}>
        {!visible2 ? <svg width={'20px'} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
          : <svg xmlns="http://www.w3.org/2000/svg" width={'20px'} fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
          </svg>
        }
      </div>
      <input className={`repw ${pwinco && 'incorrect'} ${repw && 'status'}`} onChange={e => setRepw(e.target.value)} placeholder="비밀번호를 다시 입력해주세요." type={(visible2 && 'password').toString()} />
      {pwinco && <span style={{ color: 'red' }}>비밀번호가 일치하지 않습니다.</span>}
      <button onClick={e => pw === repw ? setPwinco(false) : setPwinco(true)} className='check'>확인</button>
    </div>
  </div >;
}

export default Signup;