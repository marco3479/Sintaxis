import dynamic from 'next/dynamic';
const CoursesForYoung = dynamic(() => import("../components/pages/CoursesForYoung"));


 
const CursosParaJovenesPage = () => {
    return (
        <CoursesForYoung/>
    )
}

export default CursosParaJovenesPage;