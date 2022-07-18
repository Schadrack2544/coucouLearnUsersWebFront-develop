import React from 'react';
import { Avatar } from '@mui/material';
import { connect } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import jules from 'assets/images/jules.png';
import OnboardWidget from 'modules/widgets/OnboardWidget';
import WaveIcon from 'modules/_partials/_drawable/icons/waveIcon';
import BrandButton from 'modules/_partials/BrandButton';
import PopupSelect from 'modules/_partials/PopupSelect';
import { curriculums, grades } from 'api/static';

const OnboardStudentActivity = ({ student, profile }) => {
  const [currentIndex, setCurrentIndex] = React.useState(null);
  const [current, setCurrent] = React.useState(0);
  const [curriculum, setCurriculum] = React.useState(-1);
  const [grade, setGrade] = React.useState(-1);
  const [gender, setGender] = React.useState(-1);
  const navigate = useNavigate();
  const handleChange = (index: number) => {
    setCurrentIndex(index);
    if (current === 0) {
      setCurriculum(index);
    } else if (current === 1) {
      setGrade(index);
    } else if (current === 2) {
      setGender(index);
    }
  };
  const handleInputChange = ({ target }) => {};
  const handleNext = () => {
    if (currentIndex !== null && current < 6) {
      setCurrent(current + 1);
    }
  };
  React.useEffect(() => {
    if (!student && !profile) {
      navigate('/student/register');
    }
  }, []);
  const user = student?.user || profile?.user;

  const zero = {
    type: 'Curriculum',
    question: 'what curriculum are you doing?',
    elements: curriculums,
    label: 'Select curriculum...',
  };
  const first = {
    type: 'Grade',
    question: 'what grade are you in?',
    elements: grades,
    label: 'Select grade...',
  };

  const third = {
    type: 'Gender',
    question: 'what is your gender?',
    elements: ['Male', 'Female'],
    label: 'Select gender...',
  };

  const forth = {
    type: 'School',
    question: 'what is the name of your school?',
    label: 'Enter your school name',
    elements: [],
  };
  const fifth = {
    type: 'Age',
    question: 'what is your age?',
    label: 'Enter your age',
    elements: [],
  };
  const sixth = {
    type: 'Avatar',
    question: 'choose an avatar',
    label: '',
    elements: [],
    avatars: [
      jules,
      jules,
      jules,
      jules,
      jules,
      jules,
      jules,
      jules,
      jules,
      jules,
      jules,
      jules,
    ],
  };

  const getForm = (): any => {
    switch (current) {
      case 1:
        first.label = grade >= 0 ? grades[grade] : first.label;
        return first;
      case 2:
        third.label =
          gender >= 0 ? third.elements[gender] : third.label;
        return third;
      case 3:
        return forth;
      case 4:
        return fifth;
      case 5:
        return sixth;
      default:
        zero.label =
          curriculum >= 0 ? curriculums[curriculum] : zero.label;
        return zero;
    }
  };
  const form = getForm();
  return (
    <OnboardWidget title="Onboarding">
      <div className="px-4 mt-6 flex space-x-3">
        <WaveIcon />
        <p className="md:max-w-xl text-base">
          coucou, Here we are in the process of registering your class
          details so that we give you relevant contents
        </p>
      </div>

      <div className="flex flex-col items-center flex-grow px-4 py-4 w-full md:max-w-4xl">
        <h1 className="text-2xl md:text-4xl">
          {user?.firstName}, {form.question}
        </h1>
        <div className="mt-12 flex flex-col w-full md:max-w-sm">
          {form.type !== sixth.type ? <h3>{form.type}</h3> : null}
          {form.elements.length > 0 ? (
            <PopupSelect
              elements={form.elements}
              label={form.label}
              onClick={index => handleChange(index)}
            />
          ) : (
            <input
              placeholder={form.label}
              onChange={handleInputChange}
              type={['Age'].includes(form.type) ? 'number' : 'text'}
              className={
                form.type === sixth.type
                  ? 'hidden'
                  : 'px-4 py-3 rounded-lg border border-brand-blue mt-1'
              }
            />
          )}
          {currentIndex === null ? (
            <p className="text-red-500 px-4 mt-1">
              <sup>*</sup>This field is required
            </p>
          ) : null}
          <div className="inline-grid grid-cols-3 md:grid-cols-5 gap-x-3 md:gap-x-10 gap-y-5">
            {form.avatars?.map(element => (
              <Avatar src={element} />
            ))}
          </div>
          <div className="mt-32 ml-auto">
            <BrandButton label="NEXT" onClick={handleNext} />
          </div>
        </div>
      </div>
    </OnboardWidget>
  );
};

const mapStateToProps = state => ({
  profile: state.me.data,
  student: state.registerStudent.data,
});

export default connect(mapStateToProps)(OnboardStudentActivity);
