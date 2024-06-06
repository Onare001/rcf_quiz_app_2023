import Head from 'next/head';
import styles from '../assets/css/styles.module.css';

const Congratulation = () => {
  return (
	<div className={styles.body}>
		<Head>
			<link rel="icon" href="rcf_logo_172_X_155.png" />
			<title>View Score</title>
		</Head>
		<div className={styles.header}>
        <img className={styles.logo} src="rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
		<div className={styles.user_info}>
			<img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
			<div>
				<span className={styles.userid}>User ID</span><br/>
				<span className={styles.user}>12345-BBX</span>
			</div>
		</div>
      </div>
	 <div className={styles.scoreframe}>
		<div className={styles.xmage}>
			<img style={{width: '200px', height: '100px', align: 'center', top: '50%',	left: '50%', margin:'0px auto'}} src="shine.png" alt="Congratulation" />
		</div>
		<div style={{
			  fontFamily: 'Satoshi',
			  fontStyle: 'normal',
			  fontWeight: 500,
			  fontSize: '24px',
			  textAlign: 'center',
			  padding: '20px',
			  borderRadius: '4px'
			}}>
		<text style={{
			  width: '368px',
			  fontFamily: 'Satoshi',
			  fontStyle: 'normal',
			  fontWeight: 700,
			  fontSize: '24px',
			  textAlign: 'center',
			  color: '#1B1B1B'
			}}> 
			You Scored 
		</text><p/>
		<span style={{
			  width: '368px',
			  fontFamily: 'Satoshi',
			  fontStyle: 'normal',
			  fontWeight: 700,
			  fontSize: '64px',
			  textAlign: 'center',
			  color: '#1B1B1B'
			}}>
			40/60
		</span><br/>
		<span style={{
			  width: '368px',
			  fontFamily: 'Satoshi',
			  fontStyle: 'normal',
			  fontWeight: 400,
			  fontSize: '16px',
			  textAlign: 'center',
			  color: '#1B1B1B'
		}}>
		You Answered 58 questions out of 60
		</span><br/>
		<span style={{
			  width: '368px',
			  fontFamily: 'Satoshi',
			  fontStyle: 'normal',
			  fontWeight: 400,
			  fontSize: '24px',
			  fontWeight: 700,
			  textAlign: 'center',
			  color: '#1B1B1B'
		}}>
		Good one. You can do better
		</span><br/>
	</div>
		<button onclick="href='#'" className={styles.loginbtn}>Retake Quiz</button>
		<button className={styles.loginbtn2}>Go Home</button>
	</div>
    </div>
  );
};

export default Congratulation;