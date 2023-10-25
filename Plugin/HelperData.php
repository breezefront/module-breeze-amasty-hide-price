<?php
namespace Swissup\BreezeAmastyHidePrice\Plugin;

class HelperData
{
    public function afterGetNewPriceHtmlBox($subject, $result)
    {
        return str_replace('<script', '<script data-breeze', $result);
    }
}
