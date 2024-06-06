import Head from 'next/head';
import { GetServerSideProps } from 'next';
import { parse } from 'cookie';
import styles from '../assets/css/styles.module.css';

const SelectCourse = () => {
  return (
	<div className={styles.body}>
		<Head>
			<link rel="icon" href="/rcf_logo_172_X_155.png" />
			<title>Select Course</title>
		</Head>
		<div className={styles.header}>
			<img className={styles.logo} src="/rcf_logo_172_X_155.png" alt="RCF_Logo" width="48" height="48"/>
			{/* <div className={styles.user_info}>
			<img className={styles.ImgCircle} src="avatar.png" alt="img" width="57" height="51"/>
			<div>
				<span className={styles.userid}>User ID</span><br/>
				<span className={styles.user}>12345-BBX</span>
			</div>
		</div> */}
      </div>
	  <h3 className={styles.instruction}>Select a Course to take Quiz</h3>
    <div className={styles.container}>
      
      <div className={styles.row}>
        <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="/rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>CHM 111<br/></text>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizchm111"}>Start Quiz</button>
			</div>
		</div>
		   <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="/rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>STA 117<br/></text>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizsta117"}>Start Quiz</button>
			</div>
		</div>
      </div>
      <div className={styles.row}>
                <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>MAT 111<br/></text>
				20 Questions in 20 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmat111"}>Start Quiz</button>
			</div>
		</div>
                <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>MAT 112<br/></text>
				20 Questions in 20 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmat112"}>Start Quiz</button>
			</div>
		</div>
      </div>
      <div className={styles.row}>
               <div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			<div className={styles.right}>
				<text className={styles.course_name}>PHY 113<br/></text>
				20 Questions in 20 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizphy113"}>Start Quiz</button>
			</div>
		</div>
		<div className={styles.col}>
			<div className={styles.left}>
				<img className={styles.course_icon} src="rcf_logo_172_X_155.png" alt="Logo" />
			</div>
			{/* <div className={styles.right}>
				<text className={styles.course_name}>TEST<br/></text>
				20 Questions in 15 Minutes<br/>
				<button className={styles.StartQuiz_btn} onClick={() => window.location.href = "quizmattest"}>Start Quiz</button>
			</div> */}
		</div>
      </div>
    </div>
	</div>
  );
};


export const getServerSideProps = async (context) => {
	console.log("fetching cookies");
	// Read cookies from the request headers
	const cookies = parse(context.req.headers.cookie || '');
  
	// Access individual cookie values
	const name = cookies.name || '';
	const id = cookies.id || '';
  
	console.log("name:", name);
	console.log("id:", id);
  
	if (!id) {
	  // Cookie is not present
	  if (context.res) {
		// If running on the server-side, redirect to index page
		context.res.setHeader('Location', '/login');
		context.res.statusCode = 302;
		context.res.end();
	  } else {
		// If running on the client-side, redirect to index page
		window.location.href = '/';
	  }
	}
  
	// Pass the cookie values as props
	return {
	  props: {
		name,
		id,
	  },
	};
  };
export default SelectCourse;