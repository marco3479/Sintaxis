import dynamic from 'next/dynamic';
const Instructors = dynamic(() => import("../components/pages/Instructors"));


const InstructorsPage = () => {
    return <Instructors/>
}

export default InstructorsPage;