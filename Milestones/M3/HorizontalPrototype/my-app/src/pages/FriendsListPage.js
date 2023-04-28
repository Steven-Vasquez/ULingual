import React from 'react'
import { Link } from 'react-router-dom';
import './stylesheets/Friends.css'

const FriendsList = () => {
    return( 
        <div class = "containerfrl">
        <div class="containerfrl2">
            <div class="innercontainerfrl11">
            <a href="FriendsProfile" class="button">
            <span class="button__text">Friend 1</span>
            </a>
            </div>
            <div class="innercontainerfrl12">
            <a href="FriendsProfile" class="button">
            <span class="button__text">Friend 1 Details</span>
            </a>
            </div>
        </div>

        <div class="containerfrl2">
            <div class="innercontainerfrl21">
            <a href="FriendsProfile" class="button">
            <span class="button__text">Friend 2</span>
            </a>
            </div>
            <div class="innercontainerfrl22">
            <a href="FriendsProfile" class="button">
            <span class="button__text">Friend 2 Details</span>
            </a>
            </div>
        </div>

        <div class="containerfrl2">
            <div class="innercontainerfrl31">
            <a href="FriendsProfile" class="button">
            <span class="button__text">Friend 3</span>
            </a>
            </div>
            <div class="innercontainerfrl32">
            <a href="FriendsProfile" class="button">
            <span class="button__text">Friend 3 Details</span>
            </a>
            </div>
        </div>
        <div class="containerfrl4">
            <a href="Dashboard" class="button">
            <span class="button__text">Return</span>
            </a>
        </div>
</div>
    );
}

export default FriendsList;