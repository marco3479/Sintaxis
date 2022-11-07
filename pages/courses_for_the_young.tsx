import dynamic from 'next/dynamic';
const CoursesForYoung = dynamic(() => import("../components/pages/CoursesForYoung"));

 
const CoursesForTheYoungPage = () => {
    return (
        <CoursesForYoung/>
    )
}

export default CoursesForTheYoungPage;