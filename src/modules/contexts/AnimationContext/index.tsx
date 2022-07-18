import React from 'react';
import DefaultApi from 'api/restful';
import Constants from 'api/utils/constants';

export interface IAnimation {
  content: any;
  contents: any[];
  loading: boolean;
  onFetchContents?: () => Promise<void>;
  fetContentBySlugName?: (slug: string) => Promise<void>;
  setContents?: React.Dispatch<React.SetStateAction<any[]>>;
}

export const defaultValue: Readonly<IAnimation> = {
  content: null,
  contents: [],
  loading: false,
};

export const AnimationContext =
  React.createContext<IAnimation>(defaultValue);
export const useAnimation = () => {
  return React.useContext(AnimationContext);
};

const AnimationProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [errors, setErrors] = React.useState({});
  const [contents, setContents] = React.useState([]);
  const [content, setContent] = React.useState(null);

  const onFetchContents = async () => {
    try {
      setLoading(true);
      const { data, error } = await DefaultApi.GetRoute.getRoute(
        Constants.Endpoints.CONTENT_ENDPOINT,
      );
      setLoading(false);
      if (error) {
        setErrors({
          ...errors,
          somthingWrong:
            error?.message || 'Something went wrong, try again',
        });
      } else if (data?.data?.length) {
        setContents(data.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const fetContentBySlugName = async (slug: string) => {
    try {
      setLoading(true);
      const { data, error } = await DefaultApi.GetRoute.getRoute(
        `${Constants.Endpoints.CONTENT_ENDPOINT}/${slug}`,
      );
      setLoading(false);
      if (error) {
        setErrors({
          ...errors,
          somthingWrong:
            error?.message || 'Something went wrong, try again',
        });
      } else if (data?.data) {
        setContent(data.data);
      }
    } catch (error) {
      setLoading(false);
    }
  };

  const value = React.useMemo(() => {
    return {
      loading,
      contents,
      content,
      setContents,
      fetContentBySlugName,
      onFetchContents,
    };
  }, [contents, loading, content]);

  return (
    <AnimationContext.Provider value={value}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
