import Head from 'next/head';
import styles from '../assets/css/styles.module.css';

const Congratulation = () => {
  return (
	<div className={styles.body}>
			<Head>
			<link rel="icon" href="rcf_logo_172_X_155.png" />
			<title>Congratulation</title>
		</Head>
		<div className={styles.header}>
		
        <img className={styles.logo} onClick={() => window.location.href = "quizphy113"} src="rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
		<div className={styles.user_info}>
			<img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
		</div>
      </div>
	 <div className={styles.congframe}>
		<div className={styles.xmage}>
			<img style={{width: '200px', height: '100px', align: 'center', top: '50%',	left: '50%', margin:'0px auto'}} src="shine.png" alt="Congratulation" />
		</div>
		<div style={{
		  fontFamily: 'Satoshi',
		  fontStyle: 'normal',
		  fontWeight: 500,
		  fontSize: '24px',
		  lineHeight: '32px',
		  textAlign: 'center',
		  padding: '20px',
		  borderRadius: '4px'
		}}>Congratulation on the successful completion of your quiz</div>
	</div>
    </div>
  );
};

export default Congratulation;