import React from 'react';
import { useParams } from 'react-router-dom';
import UserWidget from 'modules/widgets/UserWidget';
import { useAnimation } from 'modules/contexts/AnimationContext';
import Topper from '../_Partials/Dashboard/Topper';
import PlayVideo from '../_Partials/Animation/PlayVideo';
import AnimationZoneList from '../_Partials/Animation/AnimationZoneList';

const AnimationZoneActivity = () => {
  const { contents, content, fetContentBySlugName } = useAnimation();
  const [animation, setAnimation] = React.useState(content);
  const { slug } = useParams();
  React.useEffect(() => {
    if (slug) {
      const matchedContents = contents.filter(
        item => item.slug === slug,
      );
      const item = matchedContents[0];
      setAnimation(item);
    }
  }, []);

  React.useEffect(() => {
    if (!animation) {
      fetContentBySlugName(slug).then(() => {
        setAnimation(content);
        // eslint-disable-next-line no-console
        console.log(content);
      });
    }
  }, [animation]);

  return (
    <UserWidget>
      <Topper title="Animations" />
      <PlayVideo data={animation} />
      <div className="h-1 w-full bg-gray-200 rounded px-4" />
      <div className="mt-12 flex flex-col">
        <h3 className="whitespace-nowrap px-4 text-xl md:text-2xl tracking-wide font-bold">
          Recommended animations.
        </h3>
        <AnimationZoneList data={contents.slice(1, 3)} />
      </div>
    </UserWidget>
  );
};

export default AnimationZoneActivity;
