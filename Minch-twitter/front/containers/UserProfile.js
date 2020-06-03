/* eslint-disable react/jsx-filename-extension */
import { Avatar, Button, Card } from "antd";
import React, { useCallback } from "react";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { LOG_OUT_REQUEST } from "../reducers/user";

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const onLogout = useCallback(() => {
    dispatch({
      type: LOG_OUT_REQUEST,
    });
  }, []);

  return (
    <Card
      actions={[
        <Link href="/profile" key="twit">
          <a>
            <div>
              TwitTwit
              <br />
              {me.Posts.length}
            </div>
          </a>
        </Link>,
        <Link href="/profile" key="following">
          <a>
            <div>
              Following
              <br />
              {me.Followings.length}
            </div>
          </a>
        </Link>,
        <Link href="/profile" key="follower">
          <a>
            <div>
              Follower
              <br />
              {me.Followers.length}
            </div>
          </a>
        </Link>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogout}>Logout</Button>
    </Card>
  );
};

export default UserProfile;
