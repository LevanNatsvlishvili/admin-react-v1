import { debounce } from 'lodash';
import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cleanForm } from './Utils';
import {
  enterData,
  fetchData,
  updateData,
  generateSlug,
} from 'services/App/Blog';
import paths from 'routing/Paths';
import BackToBrowse from 'components/BackToBrowse';
import TextField from 'components/TextField';
import Button from 'components/Button';

function useQuery() {
  const { search } = useLocation();

  return useMemo(() => new URLSearchParams(search), [search]);
}

function Create() {
  const query = useQuery();
  const id = query.get('id');
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState(new cleanForm());

  const handleChange = ({ field, value }) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSlugUpdate = () => async (value) => {
    const slug = await generateSlug({ text: value });
    handleChange({ field: 'slug', value: String(slug) });
  };

  const debouncedHandleSlugUpdate = useCallback(
    debounce(handleSlugUpdate(), 500)
  );

  const titleUpdateHandler = (value) => {
    handleChange({ field: 'title', value });
    debouncedHandleSlugUpdate(value);
  };

  const onSlugChange = (value) => {
    handleChange({ field: 'slug', value });
    debouncedHandleSlugUpdate(value);
  };

  useEffect(() => {
    if (id) {
      const handleFetchData = async () => {
        const data = await fetchData(id);
        setForm(data);
      };
      handleFetchData();
    }
    if (!id) {
      setForm(new cleanForm());
    }
  }, [id]);

  const clearForm = () => {
    setForm(new cleanForm());
    setLoading(false);
    navigate(paths.app.blog.browse);
  };

  console.log(form);

  const handleSave = () => {
    return;

    if (id) {
      updateData(form, id, clearForm);
      return;
    }
    setLoading(true);
    if (loading) return;
    enterData(form, clearForm);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, [loading]);

  return (
    <>
      <BackToBrowse to={paths.app.blog.browse} />
      <div className="p-2-0 bg-white rounded-1-2 mb-2-4">
        <div className="grid grid-cols-12 gap-2-0">
          <div className="col-span-6">
            <TextField
              onChange={(e) =>
                handleChange({ field: 'title', value: e.target.value })
              }
              value={form.title}
              required
              label="title"
            />
          </div>
          <div className="col-span-6">
            <TextField
              onChange={(e) =>
                handleChange({ field: 'slug', value: e.target.value })
              }
              value={form.slug}
              label="slug"
            />
          </div>
          <div className="col-span-12">
            <TextField multiline rows={4} label="description" />
          </div>
        </div>
      </div>

      <div>
        <Button onClick={handleSave}>Save</Button>
      </div>
    </>
  );
}

export default Create;
