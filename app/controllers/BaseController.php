<?php

class BaseController extends Controller {

    public function __construct()
    {
        Blade::setContentTags('<%', '%>');
        Blade::setEscapedContentTags('<%%', '%>');
    }

	/**
	 * Setup the layout used by the controller.
	 *
	 * @return void
	 */
	protected function setupLayout()
	{
		if ( ! is_null($this->layout))
		{
			$this->layout = View::make($this->layout);
		}
	}

}